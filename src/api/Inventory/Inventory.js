import db from "../../config/db.js"
import { Sequelize,  DataTypes } from "sequelize";
import { Product } from "../Product/Product.js";

const Inventory = db.define("inventory",
{
    id: {

        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
 
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,

    }
}
);

Product.hasOne(Inventory, {
    foreignKey: "product_id",
    allowNull: false
});
Inventory.belongsTo(Product, {
    foreignKey: "product_id",
    allowNull: false
});

export { Inventory}