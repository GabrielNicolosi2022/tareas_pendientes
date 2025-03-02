import userModel from "../models/user.model.js";

const getAll = async () => await userModel.find();

const getByEmail = async (email) => await userModel.findOne({ email: email });

const create = async (data) => await userModel.create(data).exec();

const updateById = async (id, data) =>
  await userModel.findByIdAndUpdate({ _id: id, data: data });

const updatePassword = async (id, password) =>
  await userModel.findByIdAndUpdate({ _id: id, password: password });

const deleteById = async (id) => await userModel.findByIdAndDelete({ _id: id });

export { getAll, getByEmail, create, updateById, updatePassword, deleteById };
