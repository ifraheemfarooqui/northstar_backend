import express from "express";
import { isAdmin } from "../../middleware/authMiddleWare.js";
import { GetInventoryById, GetInventoryByProductId, UpdateInventory } from "./controller.js";



const router = express.Router()


router.get("/product/:id",GetInventoryByProductId)
router.get("/:id",GetInventoryById)
router.put("/product/:id",isAdmin,UpdateInventory)



export default router