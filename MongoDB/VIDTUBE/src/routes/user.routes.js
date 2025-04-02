import { Router } from "express";
import { registerUser, userLogout } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
    upload.fields(
        [
            {
                name:"avatar",
                maxCount: 1
            },
            {
                name: "coverImage",
                maxCount:1
            }
        ]
    )
    ,
    registerUser);

//Secure Routes
router.route("/logout").post( verifyJWT , userLogout)

export default router;