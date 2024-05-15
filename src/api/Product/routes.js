import express from "express";
import { CreateProduct, DeleteProduct, GetProduct, GetProductByCategory, GetProductById, UpdateProduct } from "./controller.js";
import { isAdmin, isAuth } from "../../middleware/authMiddleWare.js";



const router = express.Router()


router.get("/",GetProduct)
router.get("/:id",GetProductById)
router.get("/category/:id",GetProductByCategory)
router.put("/:id",isAuth,isAdmin,UpdateProduct)
router.post("/",isAuth,isAdmin,CreateProduct)
router.delete("/:id",isAuth,isAdmin,DeleteProduct)


export default router