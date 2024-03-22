import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";
import { User } from "../User/User.js";

const UserPay = db.define("userpay",
{
    id: {

        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },

    payment_type : {
        type : DataTypes.ENUM("Cash on delivery","Card")
    },

    provider : {
        type : DataTypes.STRING,

    },

    account_no : {
 
        type : DataTypes.INTEGER,
    }


}
);

User.hasMany(UserPay, {
    foreignKey : "user_id",
    allowNull : false
});

UserPay.belongsTo(User, {
    foreignKey : "user_id",
    allowNull : false

})

export { UserPay}