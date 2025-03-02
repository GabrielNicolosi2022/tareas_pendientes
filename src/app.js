import express, { json, urlencoded } from "express";
import __dirname from "./dirname.js";
import cors from "cors";
import config from "./config/config.js";
import morgan from "morgan";

/* CONFIGURATIONS */
const app = express();
const PORT = config.sever.port;
const DB = config.db.cs;

/* Express */
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

/* Logger */
// const log =

/* Morgan */
app.use(morgan("dev"));

/* Routes */
// app.use(indexRouter)

/* Server */
const server = app.listen(PORT, (err) => {
  // db,
  if (err) {
    console.log("connection error: ", err.message);
    return;
  }
  console.log(
    `Running on port ${PORT}, in ${config.environment.env} environment.`
  );
});
