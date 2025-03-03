import bcrypt from "bcrypt";

export const createHash = async (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isSamePassword = async (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

export const isValidPassword = async (user, password) =>
  bcrypt.compareSync(password, user.password);
