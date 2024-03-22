import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";
import { User } from "../User/User.js";

const Address = db.define("address",
{
    id: {

        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },




    location : {
        type : DataTypes.TEXT,

    },

    city: {
        type : DataTypes.STRING,
        
    },

    country: {
        type : DataTypes.STRING,
        
    },

    postalcode : {
        type : DataTypes.INTEGER,

    },

    telephone: {
        type : DataTypes.INTEGER,
        unique : true
        
    }


}
);

User.hasMany(Address, {
    foreignKey : "user_id",
    allowNull : false
});

Address.belongsTo(User, {
    foreignKey : "user_id",
    allowNull : false

})

export { Address}