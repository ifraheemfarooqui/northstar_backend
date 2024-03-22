import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const password = process.env.DATABASE_PASSWORD;
const username = process.env.DATABASE_USERNAME;
console.log("$$$$$$$$$$$$$$$$",password,username)

 const db = new Sequelize('northstar', "postgres", "admin", {
    host: 'localhost',
    dialect: "postgres" ,
    port: 5432

 });

 

 export default db