import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    requred: true,
    default: "student",
  },
  fname: {
    type: String,
    requred: true,
  },
  lname: {
    type: String,
    requred: true,
  },
  phone: {
    type: String,
    requred: true,
  },
  address: {
    type: String,
    requred: true,
  },

  email: {
    type: String,
    requred: true,
    unique: true,
    index: 1,
  },

  password: {
    type: String,
    requred: true,
  },
});
export default mongoose.model("User", userSchema); //user table
