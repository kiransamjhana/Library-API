import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    console.log(req.body);

    res.json({
      status: "success",
      message: "Here are the users information",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;
    console.time("start");
    console.log(hashPass);
    const hashPass = hashPassword(password);
    const user = await insertUser(req.body);
    user?._id;

    res.json({
      status: "success",
      message: "new user have been created",
    });
  } catch (error) {
    let msg = error.message;

    if (msg.includes("E1100 duplicate key error")) {
      msg = " there is another user already uses this email";
    }
    console.log(error);
  }
});

export default router;
