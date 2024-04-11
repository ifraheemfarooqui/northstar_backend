import asyncHandler from "express-async-handler";
import {
  get_paydetails_by_id,
  get_paydetails,
  create_paydetails,
  update_paydetails,
  delete_paydetails,
} from "./service.js";

const GetPayDetails = asyncHandler(async (req, res) => {
  await get_paydetails()
    .then((paydetails) => {
      res.json(paydetails);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});
const GetPayDetailsById = asyncHandler(async (req, res) => {
  await get_paydetails_by_id(req.params.id)
    .then((paydetails) => {
      res.json(paydetails ? paydetails : NotFound("paydetails"));
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
const CreatePayDetails = asyncHandler(async (req, res) => {
  const { amount ,provider , status } = req.body;
  await create_paydetails(amount ,provider , status)
    .then((cat) => {
      res.json(cat);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

const UpdatePayDetails = asyncHandler(async (req, res) => {
  try {
    const cat = await get_paydetails_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("paydetails") });
    }

    const UpdatedCat = await update_paydetails(req.body, req.params.id);
    res.json(UpdatedCat[1]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const DeletePayDetails = asyncHandler(async (req, res) => {
  try {
    const cat = await get_paydetails_by_id(req.params.id);
    if (!cat) {
      res.status(401).json({ message: NotFound("paydetails") });
    }
    const deletepaydetails = await delete_paydetails(req.params.id);

    if (deletepaydetails) {
      res.json("Transction cancaled");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export {
  GetPayDetails,
  GetPayDetailsById,
  CreatePayDetails,
  UpdatePayDetails,
  DeletePayDetails,
};
