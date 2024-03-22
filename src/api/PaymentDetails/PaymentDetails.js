import db from "../../config/db.js"
import { Sequelize,DataTypes } from "sequelize"

const PaymentDetails = db.define("paymentdetails",
{
    id : {

        type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,

    },

    order_id : {

        type: Sequelize.UUID,
        allowNull : false
    },

    amount : {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
    },

    provider : {
        type : DataTypes.STRING,
        allowNull: false

    } ,

    status : {
        type: DataTypes.ENUM("pending","shipping","Out for deliviery"),

    },

    
}

);

export {PaymentDetails}