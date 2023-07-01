import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
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

router.post("/login", async (req, res) => {
  try {
    //get the data
    const { email, password } = req.body;
    // check if user exit with received email and get user form db
    const user = await getUserByEmail(email);
    //use bcyrpt to check if password is matching

    if (user?._id) {
      const isMatch = comparePassword(password, user.password);
      if (isMatch) {
        user.password = undefined;
        return res.json({
          status: "success",
          message: "Logedin successfully",
          user,
        });
      }
    }

    res.json({
      status: "error",
      message: "Please check your password",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
