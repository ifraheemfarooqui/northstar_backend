import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";


const Category = db.define("category", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  img_url: {
    type: DataTypes.TEXT,
    allowNull: true,
    
  },
},
)

export {Category}