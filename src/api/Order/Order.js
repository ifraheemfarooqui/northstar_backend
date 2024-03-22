import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";
import { User } from "../User/User.js";

const Order = db.define("order",
{
    id: {

        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },



    total : {
        type : DataTypes.FLOAT,
        defaultValue : 0,
        
    }

}
);

User.hasMany(Order, {
    foreignKey : "user_id",
    allowNull : false
});

Order.belongsTo(User, {
    foreignKey : "user_id",
    allowNull : false

})

export { Order}