import asyncHandler from "express-async-handler";
import {
  get_inventory_by_id,
  get_inventory_by_product_id,
  update_inventory,
} from "./services.js";
import { get_product_by_id } from "../Product/service.js";

const GetInventoryById = asyncHandler(async (req, res) => {
  try {
    const inventory = await get_inventory_by_id(req.params.id);
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GetInventoryByProductId = asyncHandler(async (req, res) => {
  try {
    const product = get_product_by_id(req.params.id)
    if (!product) {
      res.status(401).json({ message: NotFound("Product") });
    }
    const inventory = await get_inventory_by_product_id(req.params.id);
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const UpdateInventory = asyncHandler(async (req, res) => {
  try {
    const product = get_product_by_id(req.params.id)
    if (!product) {
      res.status(401).json({ message: NotFound("Product") });
    }

    const inventory = await update_inventory(req.body, req.params.id);
    res.json(inventory[1]) ;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { GetInventoryByProductId, GetInventoryById, UpdateInventory };
