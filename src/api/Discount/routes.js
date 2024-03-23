import express from "express";
import { CreateDiscount, DeleteDiscount, GetDiscount, GetDiscountById, UpdatedDiscount } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/",GetDiscount);
router.get("/:id",GetDiscountById);
router.post("/",isAdmin,CreateDiscount);
router.put("/:id",isAdmin,UpdatedDiscount);
router.delete("/:id",isAdmin,DeleteDiscount);
export default router;
