import db from "../../config/db.js";
import { Sequelize,  DataTypes } from "sequelize";
import bcrypt from "bcryptjs"

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  contact :{
    type: DataTypes.STRING,
    allowNull: true,
  },

  gender:{
    type: DataTypes.ENUM("Male","Female","Other"),
    allowNull:false,
  },

  profile_pic_url:{
    type:DataTypes.TEXT,
    allowNull:true
  },

  account:{
    type:DataTypes.ENUM("admin","seller","buyer"),
    allowNull:false,
    defaultValue:"buyer"
  }
},
{
    hooks:{
        beforeCreate: async (user) => {
            if(user.password){
                const salt = await bcrypt.genSalt(10)
                user.password=await bcrypt.hash(user.password, salt);

            }
        },
        beforeUpdate: async (user) => {
            if(user.password){
                const salt = await bcrypt.genSalt(10)
                user.password=await bcrypt.hash(user.password, salt);

            }
        }

    },

    scopes:{
        withoutSensitiveInfo:{
            attributes:{exclude:["password"]
        }
        }
    }
}
);

export {User}