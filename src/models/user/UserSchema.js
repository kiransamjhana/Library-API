import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    requred: true,
    default: "student",
  },
  Fname: {
    type: String,
    requred: true,
  },
  Lname: {
    type: String,
    requred: true,
  },
  phone: {
    type: String,
    requred: true,
  },
  adress: {
    type: String,
    requred: true,
  },

  email: {
    type: String,
    requred: true,
  },

  password: {
    type: String,
    requred: true,
    unique: true,
    index: 1,
  },
});
export default mongoose.model("User", userSchema); //user table
