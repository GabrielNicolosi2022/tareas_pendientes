import express, { json, urlencoded } from "express";
import cors from "cors";
import __dirname from "./dirname";

/* CONFIGURATIONS */
const app = express();
const PORT = 8080;

/* Express */
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());
