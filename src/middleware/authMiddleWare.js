import  jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../api/User/User.js";

const isAuth = asyncHandler(async (req, res, next) => 
{
  let token;
console.log(req.headers.authorization)
  if (req?.headers?.authorization) {
    token = req.headers?.authorization?.split(" ")[1];

    console.log(token)

    if(!token){
      throw Error("MiddleWare Problem: Not authorized , no token")
    }

    const decrypt = jwt.verify(token, process.env.JWT_SECRET);

    console.log(token)
    try {   
    req.user = await User.findByPk(decrypt.id);
    next();
    } catch (err) {
    res.status(401).json("MiddleWare Problem: Not Authorized : token failed ")
    return;
  }
      }
});
    const isAdmin = asyncHandler(async (req,res,next) =>
     {
        if(req.user && req.user.account == "admin"){
            next();
        }
        else{
            res.status(401).json("MiddleWare Error: Not Authorized As Admin")
        }
    });

    export {isAuth,isAdmin}