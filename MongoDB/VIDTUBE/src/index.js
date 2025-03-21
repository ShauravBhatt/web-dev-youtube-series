import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3002;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running & listening at port ${PORT}...`);
    });
  })
  .catch((error)=>{
    console.log(`MongoDB Connection Error !!\n${error}`);
  });
