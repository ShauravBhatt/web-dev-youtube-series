import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String, //cloudinary URL
    required: true,
  },
  coverImage: {
    type: String, //cloudinary URL
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password: {
    type: String,
    reqired: [true , "Invalid Password !!"]
  },
  refreshToken: {
    type: String,
    required: true,
  },
} , {timestamps : true}
);

export const User = model("User", userSchema);
