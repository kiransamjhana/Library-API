import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcrypt.js";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "Here are the users information",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    req.body.password = hashPassword(password);
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "new user have been created",
        })
      : res.json({
          statu: "error",
          message: "Unable to craete user, try again later",
        });
  } catch (error) {
    let msg = error.message;

    if (msg.includes("E1100 duplicate key error")) {
      msg = " there is another user already uses this email";
    }
    res.json({
      statu: "error",
      message: msg,
    });
  }
});

export default router;
