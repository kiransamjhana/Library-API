import mongoose from "mongoose";

const burrowSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Types.ObjectId,
    requred: true,
    default: "inactive",
  },
  bookName: {
    type: String,
    requred: true,
  },
  thumbnail: {
    type: String,
    requred: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    requred: true,
  },
  userName: {
    type: String,
    requred: true,
  },

  summary: {
    type: String,
    requred: true,
  },
});
export default mongoose.model("Burrow", burrowSchema); //Books table
