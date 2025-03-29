import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET, 
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto"
            }
        );
        console.log(`File Uploaded Successfully !!\nFile Src: ${response.url}`);
        return response;        
    } catch (error) {
        console.log("Error occurred while uploading the media !!" , error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Error Occurred While Creating The User , So Removing The Media Related To The User. Public Id : ", publicId);
    } catch (error) {
        console.log("Error occurred while removing the media !!", error);
        return null;
    }
}

export {uploadToCloudinary, deleteFromCloudinary};