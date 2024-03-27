import express from "express";
import { CreateOrder, DeleteOrder, GetOrder, GetOrderById, UpdatedOrder } from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/",GetOrder);
router.get("/:id",GetOrderById);
router.post("/",CreateOrder);
router.put("/:id",isAdmin,UpdatedOrder);
router.delete("/:id",isAdmin,DeleteOrder);
export default router;
