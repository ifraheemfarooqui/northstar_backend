import asyncHandler from "express-async-handler";
import {
  get_category_by_id,
  get_category,
  create_category,
  update_category,
  delete_category,
} from "./services.js";

const GetCategory = asyncHandler(async (req, res) => {
  await get_category()
    .then((category) => {
      res.json(category);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});
const GetCategoryById = asyncHandler(async (req, res) => {
  await get_category_by_id(req.params.id)
    .then((category) => {
      res.json(category ? category : NotFound("Category"));
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
const CreateCategory = asyncHandler(async (req, res) => {
  const { title, img_url } = req.body;
  await create_category(title, img_url)
    .then((cat) => {
      res.json(cat);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

const UpdateCategory = asyncHandler(async (req, res) => {
  try {
    const cat = await get_category_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("Category") });
    }

    const UpdatedCat = await update_category(req.body, req.params.id);
    res.json(UpdatedCat[1]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const DeleteCategory = asyncHandler(async (req, res) => {
  try {
    const cat = await get_category_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("Category") });
    }
    const deleteCategory = await delete_category(req.params.id);

    if (deleteCategory) {
      res.json("Category Deleted Successfully");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export {
  GetCategory,
  GetCategoryById,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
};
