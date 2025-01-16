const express = require("express");

const { auth } = require("../db/db.js");

const usersRouter = express.Router();

usersRouter.get("/me", auth(), (req, res) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized").redirect("/");
  }

  const user = req.user;

  res
    .status(200)
    .json({ email: user.email, username: user.username, id: user.id });
});

module.exports = usersRouter;
