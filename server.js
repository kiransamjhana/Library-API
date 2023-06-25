import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

const PORT = process.env.PORT || 8003;

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "sever running well",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log("server is running at http://localhost:${PORT}");
});
