import { Router } from "express";
import * as userController from "../controllers/user.controler.js";

const userRouter = Router();

// Mostrar todos los usuarios
userRouter.get("/", userController.getAllUsers);
// Crear nuevo usuario
userRouter.post("/create", userController.createUser);

export default userRouter;
