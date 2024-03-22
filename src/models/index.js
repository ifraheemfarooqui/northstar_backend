import db from "../config/db.js"
import { User } from "../api/User/User.js"
import { Address } from "../api/Address/Address.js"
import { Cart } from "../api/Cart/Cart.js"
import { Category } from "../api/Category/Category.js"
import { Discount } from "../api/Discount/Discount.js"
import { Inventory } from "../api/Inventory/Inventory.js"
import { Order } from "../api/Order/Order.js"
import { OrderItem } from "../api/OrderItem/OrderItem.js"
import {PaymentDetails} from "../api/PaymentDetails/PaymentDetails.js"
import { Product } from "../api/Product/Product.js"
import { Session } from "../api/Session/Session.js"
import {  UserPay } from "../api/UserPay/UserPay.js" 

const init_model = async(req,res) =>{
    try {
        await db.sync({alter:true})
        await User.sync({alter:true})
        await Address.sync({alter:true})
        await Cart.sync({alter:true})
        await Category.sync({alter:true})
        await Discount.sync({alter:true})
        await Inventory.sync({alter:true})
        await Order.sync({alter:true})
        await OrderItem.sync({alter:true})
        await PaymentDetails.sync({alter:true})
        await Product.sync({alter:true})
        await Session.sync({alter:true})
        await UserPay.sync({alter:true})
        res.status(200).json("Database is born")
    } catch (error) {
        res.json(error)
    }
} 


export default init_model