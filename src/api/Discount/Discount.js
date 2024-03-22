import db from "../../config/db.js"
import { Sequelize , DataTypes } from "sequelize"

const Discount = db.define ("discount", 
{
 id : {
    type : Sequelize.UUID,
    defaultValue : Sequelize.UUIDV4,
    allowNull: false,
    unique : true,
    primaryKey: true
 },

  percent : {

    type : DataTypes.FLOAT,
    defaultValue : 0,
    active : DataTypes.BOOLEAN,

  },
  
}
);

export {Discount}