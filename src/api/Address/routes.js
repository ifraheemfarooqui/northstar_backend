import express from "express";
import {
  CreateAddress,
  DeleteAddress,
  GetAddress,
  GetAddressById,
  GetAddressByUserId,
  UpdateAddress,
} from "./controller.js";
import { isAdmin } from "../../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/", GetAddress);
router.get("/:id", GetAddressByUserId);
router.get("/:id", GetAddressById);
router.post("/", isAdmin, CreateAddress);
router.put("/:id", isAdmin, UpdateAddress);
router.delete("/:id", isAdmin, DeleteAddress);

export default router;
