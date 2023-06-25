import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import express from "express";
const app = express();

const PORT = process.env.PORT || 8003;

//connect database
import connectMongoDB from "./src/config/mongoConfig.js";
connectMongoDB();
//middleware

app.use(morgan("dev"));
app.use(express.json());

//apis

import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user", (req, res) => {
  res.json({
    status: "success",
    message: "sever running well",
  });
});

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
