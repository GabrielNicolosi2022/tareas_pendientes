import userModel from "../models/user.model.js";

const getAll = async () => await userModel.find().lean();

const getById = async (id) => await userModel.findOne({ _id: id }).exec();

const getByEmail = async (email) =>
  await userModel.findOne({ email: email }).exec();

const findUserByEmail = async (email) =>
  await userModel.findOne({ email: email }).lean();

const create = async (data) => await userModel.create(data);

const updateById = async (id, data) =>
  await userModel.findByIdAndUpdate({ _id: id }, { $set: data }, { new: true });

const updatePasswordByEmail = async (email, hashedPassword) =>
  await userModel.findByIdAndUpdate(
    { email: email },
    { $set: { password: hashedPassword } }
  );

const deleteById = async (id) => await userModel.findByIdAndDelete({ _id: id });

export {
  getAll,
  getById,
  getByEmail,
  findUserByEmail,
  create,
  updateById,
  updatePasswordByEmail,
  deleteById,
};
