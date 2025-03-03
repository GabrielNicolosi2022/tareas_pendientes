/* //TODO
 * - Gestión de Usuarios -
 * Registro e inicio de sesión (correo/contraseña, OAuth con Google/Facebook).
 * Autenticación y Gestión de Usuarios (jwt bcrypt.js helmet)
 * Restablecimiento de contraseña.
 * Roles de usuario (usuario normal, administrador).
 * Crear, leer, actualizar y eliminar (CRUD) tareas.
 * Categorizar usuarios.
 */

import { formatedUser, showFormattedUser } from "../dto/user.dto.js";
import {
  validateFormatData,
  validateUserFields,
} from "../helpers/fotmatValidations.helpers.js";
import * as usersServices from "../services/user.services.js";
import getLogger from "../utils/log.utils.js";
import { createHash } from "../utils/validations.utils.js";

const log = getLogger();

/* CONTROLLERS */

const getAllUsers = async (req, res) => {
  try {
    const data = await usersServices.getAll();
    log.debug("data: ", data);
    if (!data) {
      return log.error("No hay usuarios para mostrar");
    }
    const users = data.map((user) => showFormattedUser(user));
    log.debug("users: ", users);

    return res.status(200).json({
      status: "success",
      message: "Usuarios encontrados",
      payload: users,
    });
  } catch (error) {
    log.fatal(`Error al intentar mostrar usuarios: ${error}`, {
      error,
    });
    return res
      .status(500)
      .json({ status: error, message: "Internal Server Error" });
  }
};

const getUsersById = async (req, res) => {};

const getUsersByEmail = async (req, res) => {};

const createUser = async (req, res) => {
  const data = req.body;
  try {
    // Validar que data sea un objeto y no sea enviado vacío
    const validatedData = validateFormatData(data);
    log.debug("validatedData: " + validatedData);
    if (validatedData) {
      log.error(validatedData);
      return res.status(400).json({ status: "Error", message: validatedData });
    }

    // Validar que se proporcionen todos los campos obligatorios
    const validatedRequiredFields = validateUserFields(data);
    log.debug("validatedRequiredFields: " + validatedRequiredFields);
    if (validatedRequiredFields) {
      log.error(validatedRequiredFields);
      return res
        .status(400)
        .json({ status: "Error", message: validatedRequiredFields });
    }

    // Verificar que no sea un email existente en la base de datos
    const existingUser = await usersServices.findUserByEmail(data.email);
    log.debug("existingUser: " + existingUser);
    if (existingUser) {
      log.error(`El email ${data.email} ya existe en la base de datos`);
      return res.status(409).json({
        status: "Error",
        message: "Conflict: El email ya existe en la base de datos",
      });
    }

    const hashedPassword = await createHash(data.password);
    log.debug(`hashedPassword: ${hashedPassword}`);

    // Dar formato de usuario
    const newUser = formatedUser(data, hashedPassword);

    log.debug(`newUser: ${JSON.stringify(newUser)}`);
    // Guargar el nuevo usuario en la base de datos
    const createdUser = await usersServices.create(newUser);

    res.status(201).json({
      status: "success",
      message: "Nuevo usuario creado correctamente",
      payload: createdUser,
    });
  } catch (error) {
    log.fatal(`Error al guardar el Nuevo usuario: ${error.message}`, { error });
    return res
      .status(500)
      .json({ status: error, message: "Internal Server Error" });
  }
};

const updateUserById = async (req, res) => {};

const deleteUser = async (req, res) => {};

export {
  getAllUsers,
  getUsersById,
  getUsersByEmail,
  createUser,
  updateUserById,
  deleteUser,
};
