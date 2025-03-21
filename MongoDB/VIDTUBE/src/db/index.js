import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`MongoDB Connected Successfully!!\nHost Data : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection Error !!\n${error}`);
    process.exitCode(1);
  }
};

export default connectDB ;