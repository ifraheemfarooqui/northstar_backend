import asyncHandler from "express-async-handler";
import { updateUserById } from "./service.js";

const update_user = asyncHandler(async (req, res) =>{
const data = req.body;

await updateUserById(data,req.user.id)
    .then((updatedUser) => {
        res.status(200).json(updatedUser[1])
    })
    .catch((err) => {
        res.ststus(500).json({error: err.message})
    })


})

export {update_user}