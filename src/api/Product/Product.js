import db from "../../config/db.js"
import { Sequelize, DataTypes } from "sequelize"
import { Category } from "../Category/Category.js";

const Product = db.define ("product" ,
{
    id : {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true
    },

    name : {

        type : DataTypes.STRING,
        allowNull:false,

    },

    description : {

        type : DataTypes.TEXT,
        allowNull: false,

    },


    price : {
        type : DataTypes.FLOAT,
        defaultValue: 0,
        allowNull : false,
    },

    img_url :{
        type : DataTypes.STRING,
        defaultValue : null,
        allowNull : true,
    }



}
);

Category.hasMany(Product, {
    foreignKey: "category_id",
    allowNull: false
});
Product.belongsTo(Category, {
    foreignKey: "category_id",
    allowNull: false
})

export {Product} 