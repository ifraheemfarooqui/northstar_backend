import express from "express";
import { isAdmin } from "../../middleware/authMiddleWare.js";
import { GetInventoryById, GetInventoryByProductId, UpdateInventory } from "./controller.js";



const router = express.Router()


router.get("/",GetInventoryByProductId)
router.get("/:id",GetInventoryById)
router.put("/:id",isAdmin,UpdateInventory)



export default router