import express from "express";
import { CreateCategory, DeleteCategory, GetCategory, GetCategoryById, UpdateCategory } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";



const router = express.Router()


router.get("/",GetCategory)
router.get("/:id",GetCategoryById)
router.put("/:id",isAdmin,UpdateCategory)
router.post("/",isAdmin,CreateCategory)
router.delete("/:id",isAdmin,DeleteCategory)


export default router