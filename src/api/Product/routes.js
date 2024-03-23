import express from "express";
import { CreateProduct, DeleteProduct, GetProduct, GetProductByCategory, GetProductById, UpdateProduct } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";



const router = express.Router()


router.get("/",GetProduct)
router.get("/:id",GetProductById)
router.get("/:id",GetProductByCategory)
router.put("/:id",isAdmin,UpdateProduct)
router.post("/",isAdmin,CreateProduct)
router.delete("/:id",isAdmin,DeleteProduct)


export default router