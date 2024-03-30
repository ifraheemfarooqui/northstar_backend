import express from "express";
import { CreatePayDetails, DeletePayDetails, GetPayDetails, GetPayDetailsById, UpdatePayDetails } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";



const router = express.Router()


router.get("/",GetPayDetails)
router.get("/:id",GetPayDetailsById)
router.put("/:id",isAdmin,UpdatePayDetails)
router.post("/",isAdmin,CreatePayDetails)
router.delete("/:id",isAdmin,DeletePayDetails)


export default router