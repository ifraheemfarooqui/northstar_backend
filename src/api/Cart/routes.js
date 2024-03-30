import express from "express";
import { CreateCart, DeleteCart, GetCart, GetCartByCategory, GetCartById, UpdateCart } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";



const router = express.Router()


router.get("/",GetCart)
router.get("/:id",GetCartById)
router.get("/category/:id",GetCartByCategory)
router.put("/:id",isAdmin,UpdateCart)
router.post("/",isAdmin,CreateCart)
router.delete("/:id",isAdmin,DeleteCart)


export default router