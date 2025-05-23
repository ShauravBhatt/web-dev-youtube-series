import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.models.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessandRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User Not Found !!");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating the access and refresh tokens !!"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  //validation
  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All Fields Are Mandatory To Fill Up !!");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(400, "User Already Exists !!");
  }

  //Upload media in Cloudinary
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImgLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(
      400,
      "Avatar File is Missing or not uploaded properly !!"
    );
  }

  let avatar, coverImage;
  try {
    avatar = await uploadToCloudinary(avatarLocalPath);
  } catch (error) {
    throw new ApiError(500, "Failed to upload Avatar Image !!", error);
  }
  try {
    coverImage = await uploadToCloudinary(coverImgLocalPath);
  } catch (error) {
    throw new ApiError(500, "Failed to upload cover Image !!", error);
  }

  //Create a user
  try {
    const user = await User.create({
      fullname,
      avatar: avatar.secure_url,
      coverImage: coverImage?.secure_url || "",
      email,
      password,
      username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user."
      );
    }

    res
      .status(201)
      .json(
        new ApiResponse(200, createdUser, "User Registered Successfully !!")
      );
  } catch (error) {
    console.log("User Creating Failed !!");
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }

    throw new ApiError(
      500,
      "Something Went Wrong While Creating The User , So Images Related To That User Is Removed From Cloudinary !!"
    );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required for login !!");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    throw new ApiError(404, "User Not Found !!");
  }

  const isPasswordValid = await user.comparePassword(user._id);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid User Credentials !!");
  }

  const { accessToken, refreshToken } =
    await user.generateAccessandRefreshTokens();

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!loggedInUser) {
    throw new ApiError(
      404,
      "Something went wrong, user data not found in database !!"
    );
  }

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .jsons(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User Logged In Successfully !!"
      )
    );
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh Token Is Required !!");
  }

  try {
    const decodeToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodeToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessandRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .jsons(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed Successfully !!"
        )
      );
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while refreshing the access token !!"
    );
  }
});

const userLogout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .clearCookies("accessToken", options)
    .clearCookies("refreshToken", options)
    .json(200, {}, "User Logged Out Successfully !!");
});

const changePassword = asyncHandler(async (req, res) => {
  const {oldPassword , newPassword} = req.body;

  if(!oldPassword || !newPassword){
    throw new ApiError(401 , "Please Fill Both The Fields !!");
  }

  const user = await User.findById(req.user?._id);

  if(!user){
    throw new ApiError(404 , "User not found !");
  }

  const isPasswordValid = await user.comparePassword(oldPassword);

  if(!isPasswordValid){
    throw new ApiError("Old Password is Wrong !!");
  }

  user.password = newPassword;

  await user.save({validateBeforeSave: false});

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password is changed !!"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current User Details !!"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const {fullname , email} = req.body ;

  if(!fullname && !email){
    throw new ApiError(400,"Please fill the field to update the details !!");
  }

  const updateDetails = {}

  if(fullname){
    updateDetails.fullname = fullname;
  }

  if(email){
    updateDetails.email = email;
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: updateDetails
    },
    {new: true}
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200 , user , "Account Details Updated Successfully !!"));
});

const updateAvatar= asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  if(!avatarLocalPath){
    throw new ApiError(400 , "File Is Required To Update The Image !!");
  }

  const avatar = await uploadToCloudinary(avatarLocalPath);

  if(!avatar.url){
    throw new ApiError(500 , "Something went wrong while uploading the file in cloud !!");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id , 
    {
      $set: {
        avatar: avatar.url
      }
    },
    {new: true}
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200 , user , "User Avatar Image Updated !!"));
});

const updateCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;

  if(!coverImageLocalPath){
    throw new ApiError(400 , "File Is Required To Update The Image !!");
  }

  const coverImage = await uploadToCloudinary(coverImageLocalPath);

  if(!coverImage.url){
    throw new ApiError(500 , "Something went wrong while uploading the file in cloud !!");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id , 
    {
      $set: {
        coverImage: avatar.url
      }
    },
    {new: true}
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200 , user , "User Cover Image Updated !!"));
});

const getUserChannelProfile = asyncHandler(async (req,res)=>{
  const {username} = req.params ;

  if(!username.trim()){
    throw new ApiError(400 , "Username doesn't Exist !!")
  }

  const channel = await User.aggregate(
    [
      {
        $match: {
          username: username?.trim().toLowerCase()
        }
      },
      {
        $lookup: {
          from: "Subscribe",
          localField: "_id",
          foreignField: "channel",
          as: "subscribers"
        },
        $lookup: {
          from: "Subscribe",
          localField: "_id",
          foreignField: "subscriber",
          as: "subscribedTo"
        },
        $addField: {
          subscriberCount: {
            $size: "$subscribers"
          },
          channelSubscribedToCount: {
            $size: "$subscribedTo"
          }
        },
        isSubscribed: {
          $cond: {$in: [req.user?._id, "$subscribers.subscriber"]},
          then: true,
          else: false
        }
      },
      {
        $project: {
          fullname: 1,
          username: 1,
          avatar: 1,
          coverImage: 1,
          subscriberCount: 1,
          channelSubscribedToCount: 1,
          isSubscribed: 1
        }
      }
    ]
  )

  if(!channel?.length){
    throw new ApiError(404, "Can't Fetch Channel Data !!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, channel[0] , "Data Fetched Successfully !!"));
});

const getWatchHistory = asyncHandler(async (req,res)=>{
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user?._id),
      }
    },
    {
      $lookup: {
        from: "Video",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullname: 1,
                    username: 1,
                    avatar: 1
                  }
                }
              ]
            }
          }
        ]

      }
    },
    {
      $addField: {
        owner: {
          $first: "$owner"
        }
      }
    }
  ]);

  if(!user){
    throw new ApiError(500 , "Users watch history can't fetched !!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user[0]?.watchHistory , "Watch History Of User Fetched Successfully !!"))
});

export { registerUser, loginUser, refreshAccessToken, userLogout , changePassword , getCurrentUser , updateAccountDetails , updateAvatar , updateCoverImage, getUserChannelProfile, getWatchHistory };
