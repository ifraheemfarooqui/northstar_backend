import asyncHandler from "express-async-handler";
import {
  create_product,
  delete_product,
  get_product,
  get_product_by_cat,
  get_product_by_id,
  update_product,
} from "./service.js";

const GetProduct = asyncHandler(async (req, res) => {
  try {
    const product = await get_product();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const GetProductByCategory = asyncHandler(async (req, res) => {
  try {
    const product = await get_product_by_cat(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const GetProductById = asyncHandler(async (req, res) => {
  try {
    const product = await get_product_by_id(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const CreateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await create_product(names, description, price);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const UpdateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await update_product(req.body, req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const DeleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await delete_product(req.params, id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export {
  GetProduct,
  GetProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  GetProductByCategory
};
