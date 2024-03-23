import asyncHandler from "express-async-handler";
import {
  create_discount,
  delete_discount,
  get_discount,
  get_discount_by_id,
  update_discount,
} from "./services.js";

const GetDiscount = asyncHandler(async (req, res) => {
  try {
    const discount = await get_discount();
    res.json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GetDiscountById = asyncHandler(async (req, res) => {
  try {
    const discount = await get_discount_by_id(req.params.id);
    res.json(discount);
    if (!discount) {
      res.status(401).json(NotFound("discount"));
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const CreateDiscount = asyncHandler(async (req, res) => {
  try {
    const discount = await create_discount(percent);
    res.json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const UpdatedDiscount = asyncHandler(async (req, res) => {
  try {
    const discount = await update_discount(body, req.params.id);
    res.json(discount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const DeleteDiscount = asyncHandler(async (req, res) => {
  try {
    const discount = await delete_discount(req.params.id);
    res.json("Discount has been deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export {
  GetDiscount,
  GetDiscountById,
  CreateDiscount,
  UpdatedDiscount,
  DeleteDiscount,
};
