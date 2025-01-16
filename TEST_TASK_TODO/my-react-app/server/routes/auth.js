const express = require("express");

const bodyParser = require("body-parser");
const {
  DB,
  createUser,
  deleteSession,
  createSession,
  findUserByUserEmail,
  auth,
  hash,
} = require("../db/db.js");

const authRouter = express.Router();

authRouter.post("/logout", async (req, res) => {
  if (!req.user) {
    return res.redirect("/");
  }

  await deleteSession(req.sessionId);
  res.clearCookie("sessionId").redirect("/");
});

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send("Не все поля для регистрации заполнены");
  } else {
    const user = await createUser({ username, email, password });
    res.status(201).json({ id: user.id });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByUserEmail(email);

  if (!user || user.password !== hash(password)) {
    return res.status(401).send("Неверный email или пароль");
  }

  if (!user || user.password !== hash(password)) {
    res.redirect("/?authError=true");
  } else {
    const sessionId = await createSession(user.id);
    res.cookie("sessionId", sessionId, { httpOnly: true }).redirect("/");
  }
});

module.exports = authRouter;
