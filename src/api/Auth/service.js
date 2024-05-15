import { generateToken } from "../../utensils/GenerateToken.js";
import { User } from "../User/User.js";
import bcrypt from "bcryptjs"

const registerUser = async (fullname, email, password, gender, contact, account) => {
  const user = await User.create({
    fullname,
    email,
    password,
    gender,
    contact,
    account,
  });
  const token = {...user?.dataValues, token: generateToken(user?.id)};

  return token;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if(!user){
    throw Error("invalid email")
    
  }

const ValidPassword = await bcrypt.compare(password, user.password)

if(!ValidPassword){
  throw Error("Invalid password")
}
const userInfo = {
  id: user.id,
  fullname: user.fullname,
  email: user.email,
  profile_picture: user.profile_pic_url,
  account: user.account,
   token: generateToken(user.id),
};
return userInfo;

};

export { registerUser, loginUser };
