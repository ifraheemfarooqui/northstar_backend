import asyncHandler from "express-async-handler";
import {
  create_cart,
  delete_cart,
  get_cart,
  get_cart_by_cat,
  get_cart_by_id,
  update_cart,
} from "./service.js";
import { NotFound } from "../../utensils/errormessages.js";


const GetCart = asyncHandler(async (req, res) => {
  try {
    const cart = await get_cart();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GetCartById = asyncHandler(async (req, res) => {
  try {
    const cart = await get_cart_by_id(req.params.id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const CreateCart = asyncHandler(async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await create_cart(quantity);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const UpdateCart = asyncHandler(async (req, res) => {
  try {
    const cart = get_cart_by_id(req.params.id);
    if (!cart) {
      res.status(401).json({ message: NotFound("Cart") });
    }

    const updatedCart = await update_cart(req.body, req.params.id);
    res.json(updatedCart[1]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const DeleteCart = asyncHandler(async (req, res) => {
  try {
    const cart = get_cart_by_id(req.params.id);
    if (!cart) {
      res.status(401).json({ message: NotFound("Cart") });
    }

    const deletedcart = await delete_cart(req.params.id);
    if (deletedcart) {
      res.json("Cart deleted successfully");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export {
  GetCart,
  GetCartById,
  CreateCart,
  UpdateCart,
  DeleteCart,
};
