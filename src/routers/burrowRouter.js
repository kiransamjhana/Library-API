import express from "express";

const router = express.Router();

const twoWeeks = 14;

router.post("/", (req, res) => {
  try {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate + twoWeeks);
    req.body.dueDate = dueDate;
    res.json({
      status: "success",
      message: " Your book has been burrowed and updated in teh system",
    });
  } catch (error) {}
});
export default router;
