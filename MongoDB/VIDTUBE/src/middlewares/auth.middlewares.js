import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/users.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt, { decode } from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req , _ , next) =>{
    const token = req.cookies.refreshToken || req.header("Authorization")?.replcae("Bearer ","");

    if(!token){
        throw new ApiError(401,"Unauthorized");
    }

    try {
        const decodedToken = jwt.verify(
            token
            ,process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if(!user){
            throw new ApiError(401 , "Unauthorized");
        }
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Tokens !!");
    }
})
