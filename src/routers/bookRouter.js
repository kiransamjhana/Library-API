import express from "express";
import {
  addBook,
  getBooks,
  deleteBook,
  updateBooks,
} from "../models/books/booksModel.js";
import { adminAuth, auth } from "../utils/middleware/authMiddleware.js";
const router = express.Router();
router.post("/", auth, adminAuth, async (req, res) => {
  try {
    const result = await addBook(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New Book has been added",
        })
      : res.json({
          status: "error",
          message: "Error in Adding Book to Database",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await getBooks();

    res.json({
      status: "success",
      message: "Book list",
      books,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.put("/", auth, adminAuth, async (req, res) => {
  try {
    const { __v, _id, ...rest } = req.body;

    const result = await updateBooks(_id, rest);

    result?._id
      ? res.json({
          status: "success",
          message: " book has been updated successfully",
        })
      : res.json({
          status: "error",
          message: "Error, unable to update the book, try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", auth, adminAuth, async (req, res) => {
  try {
    const { _id } = req.params;
    const books = await deleteBook(_id);

    books?._id
      ? res.json({
          status: "success",
          message: "The book has been deleted",
        })
      : res.json({
          status: "error",
          message: "Unable to deleted the book ",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
