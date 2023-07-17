import express from "express";
import { addReview } from "../models/review/reviewModel.js";
import { auth } from "../utils/middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    console.log(req.body);
    const result = await addReview(req.body);
    if (result?._id) {
      return res.json({
        status: "success",
        message: "your review  has been received",
      });
    }
    res.json({
      status: "error",
      message: "error in adding review to the databases",
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
    const reviews = await getRevviews();
    res.json({
        status:"success",
        message:""
    })
  } catch (error) {}
});

export default router;
