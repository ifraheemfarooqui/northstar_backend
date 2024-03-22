import db from "../../config/db.js"
import { Sequelize,  DataTypes } from "sequelize";
import { User } from "../User/User.js";


const Session = db.define("session",
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

User.hasMany(Session, {
    foreignKey : "user_id",
    allowNull : false
});

Session.belongsTo(User, {
    foreignKey : "user_id",
    allowNull : false

})

export { Session}