import asyncHandler from "express-async-handler";
import {
  create_address,
  get_address,
  get_address_by_id,
  get_address_by_user_id,
} from "./services.js";

const GetAddress = asyncHandler(async (req, res) => {
  try {
    const address = await get_address();
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GetAddressById = asyncHandler(async (req, res) => {
  try {
    const address = await get_address_by_id(req.params.id);
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GetAddressByUserId = asyncHandler(async (req, res) => {
  try {
    const address = await get_address_by_user_id(req.params.id);
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const CreateAddress = asyncHandler(async (req, res) => {
  const { location, city, country, postalcode, telephone } = req.body;
  await create_address(req.body)
    .then((cat) => {
      res.json(cat);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

const UpdateAddress = asyncHandler(async (req, res) => {
  try {
    const cat = await get_address_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("Address") });
    }

    const UpdatedCat = await update_address(req.body, req.params.id);
    res.json(UpdatedCat[1]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const DeleteAddress = asyncHandler(async (req, res) => {
  try {
    const cat = await get_address_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("Address") });
    }
    const deleteAddress = await delete_address(req.params.id);

    if (deleteAddress) {
      res.json("Address Deleted Successfully");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export {
  GetAddress,
  GetAddressById,
  GetAddressByUserId,
  CreateAddress,
  UpdateAddress,
  DeleteAddress,
};
