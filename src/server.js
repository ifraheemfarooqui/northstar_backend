import express from "express";
import routes from "./routes/index.js";
import db from "./config/db.js";
import {init_model, init_procedure } from "./models/index.js";
import bodyParser from "body-parser";
import dotenv from "dotenv"
const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/api", routes);


try {
  await db.authenticate();

  console.log("database is connected a successfully");
} catch (error) {
  console.log("unable to connect", error);
}

app.get("/db/models", init_model);
app.get("/db/procedure", init_procedure);

app.listen(5000, console.log(`Server is running on port 5000`));
