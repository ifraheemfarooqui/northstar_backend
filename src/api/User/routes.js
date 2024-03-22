import express from "express";
import { isAuth } from "../../middleware/authMiddleWare.js";
import { update_user } from "./controller.js";


const router = express.Router()


router.put("/",isAuth,update_user)

export default router