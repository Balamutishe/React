import { Router } from "express";

import {
  createUser,
  deleteSession,
  createSession,
  findUserByUserEmail,
  hash,
} from "../db/db.js";

const authRouter = Router();

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
    res.send("Неверный email или пароль").redirect("/?authError=true");
  } else {
    const sessionId = await createSession(user.id);
    res.cookie("sessionId", sessionId, { httpOnly: true }).redirect("/");
  }
});

export default authRouter;
