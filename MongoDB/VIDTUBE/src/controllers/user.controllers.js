import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.models.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

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

export { registerUser };
