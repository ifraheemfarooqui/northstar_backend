import asyncHandler from "express-async-handler";
import { loginUser, registerUser } from "./service.js";
import { User } from "../User/User.js";

const register_user = asyncHandler(async (req, res) => {
  const { fullname, email, password, contact, gender, account } = req.body;

  console.log(fullname, email, contact);

  const is_email = await User.findOne({ where: { email: email } });
  if (is_email) {
    res.status(401).json("This email already exist");
    return;
  }

  if (!fullname || !password || !contact || !email || !gender) {
    res.status(401).json("All feild are Required");
    return;
  }

  try {
    const user = await registerUser(fullname, email, password, gender, contact, account);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const login_user = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.json(error.message);
  }
});

export { register_user, login_user };
