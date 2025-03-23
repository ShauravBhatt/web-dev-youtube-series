import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password,10);
  next();
});

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id ,
      email: this.email,
      fullname : this.name
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
  )
}

userSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = model("User", userSchema);
