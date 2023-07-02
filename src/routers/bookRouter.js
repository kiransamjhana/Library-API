import express from "express";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
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
  } catch (error) {}
});

export default router;
