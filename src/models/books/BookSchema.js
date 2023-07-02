import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  status: {
    type: String,
    requred: true,
  },
  title: {
    type: String,
    requred: true,
  },
  author: {
    type: String,
    requred: true,
  },
  year: {
    type: Number,
    requred: true,
  },
  thumbnail: {
    type: String,
    requred: true,
  },

  summary: {
    type: String,
    requred: true,
  },
});
export default mongoose.model("Books", bookSchema); //Books table
