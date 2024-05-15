import asyncHandler from "express-async-handler";
import {
  create_product,
  delete_product,
  get_product,
  get_product_by_cat,
  get_product_by_id,
  update_product,
} from "./service.js";
import { NotFound } from "../../utensils/errormessages.js";
import { get_category_by_id } from "../Category/services.js";
import { Inventory } from "../Inventory/Inventory.js";

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
    const cat = await get_category_by_id(req.params.id)
    if (!cat) {
      res.status(401).json({ message: NotFound("Category") });
    }
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
    const { names, description, price, category_id, qty, img_url } = req.body;
    const product = await create_product(
      names,
      description,
      price,
      category_id,
      qty,
      img_url
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const UpdateProduct = asyncHandler(async (req, res) => {
  try {

    const product = get_product_by_id(req.params.id)
    if (!product) {
      res.status(401).json({ message: NotFound("Product") });
    }

    const updatedProduct = await update_product(req.body, req.params.id);  
    res.json(updatedProduct[1]);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const DeleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = get_product_by_id(req.params.id)
    if (!product) {
      res.status(401).json({ message: NotFound("Product") });
    }

    const deletedProduct = await delete_product(req.params.id);
    if(deletedProduct){
    res.json("Product deleted successfully");
    }
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
  GetProductByCategory,
};
