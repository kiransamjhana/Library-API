import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

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
app.use(cors());

//apis

import userRouter from "./src/routers/userRouter.js";
import bookRouter from "./src/routers/bookRouter.js";
import burrowRouter from "./src/routers/burrowRouter.js";
import { auth } from "./src/utils/middleware/authMiddleware.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/burrow", auth, burrowRouter);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "sever running well",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`server is running at http://localhost:${PORT}`);
});
