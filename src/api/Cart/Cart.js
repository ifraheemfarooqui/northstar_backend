import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";
import { OrderItem } from "../OrderItem/OrderItem.js";
import { Session } from "../Session/Session.js";


const Cart = db.define("cart",
{
    id: {

        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },



    


    quantity : {
        type : DataTypes.INTEGER,
        defaultValue : 1,
        
    }

}
);

OrderItem.hasMany(Cart, {
    foreignKey: "orderitem_id",
    allowNull: false
});
Cart.belongsTo(OrderItem, {
    foreignKey: "orderitem_id",
    allowNull: false
});

Session.hasOne (Cart,{
    foreignKey: "session_id",
    allowNull: false
});

Cart.belongsTo (Session, {
    foreignKey: "session_id",
    allowNull: false
})

export { Cart}