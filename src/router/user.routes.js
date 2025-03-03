import { Router } from "express";
import * as userController from "../controllers/user.controler.js";

const userRouter = Router();

// Crear nuevo usuario
userRouter.post("/create", userController.createUser);

export default userRouter;
