import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  position: {
    type: String,
  },
  category: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
