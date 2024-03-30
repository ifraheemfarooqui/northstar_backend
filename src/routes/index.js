import express from "express";
import { login_user, register_user } from "../api/Auth/controller.js";
import userRoutes from "../api/User/routes.js"
import catRoutes from "../api/Category/routes.js"
import orderRoutes from "../api/Order/routes.js"
import discountRoutes from "../api/Discount/routes.js"
import productRoutes from "../api/Product/routes.js"
import inventoryRoutes from "../api/Inventory/routes.js"
import addressRoutes from "../api/Address/routes.js"
import cartRoutes from "../api/Cart/routes.js"
import paydetailsRoutes from "../api/PaymentDetails/routes.js"
import { isAdmin, isAuth } from "../middleware/authMiddleWare.js";

const router = express.Router()


router.post("/register", register_user)  
router.post("/login", login_user)  

router.use("/user", userRoutes)
router.use("/category",isAuth,catRoutes)

router.use("/discount",isAuth,discountRoutes)
router.use("/product",isAuth,productRoutes)
router.use("/inventory",isAuth,inventoryRoutes)
router.use("/address",isAuth,addressRoutes)
router.use("/order",isAuth,orderRoutes)
router.use("/order",isAuth,cartRoutes)
router.use("/order",isAuth,paydetailsRoutes)

export default router
