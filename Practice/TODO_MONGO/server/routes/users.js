const router = require("express").Router();
const bodyParser = require("body-parser");
const crypto = require("node:crypto");
const pick = require("lodash/pick");
const fetchDb = require("../database/mongoClient.js");

const {
  createUser,
  findUserByUsername,
  createSession,
  deleteSession,
  auth,
  hash,
} = require("../database/users.js");

router.use(async (req, res, next) => await fetchDb(req, res, next, "todolist"));

router.get("/", auth(), async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send("Unauthorized");
    }

    const user = pick(req.user, "username");

    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post(
  "/signup",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const { username, password } = req.body;

      if (username && password) {
        const { insertedId } = await createUser(req.db, username, password);

        if (insertedId) {
          res.status(201).send(`New user ID:${insertedId} created`);
        } else {
          res.status(400).send("User not created");
        }
      } else {
        res.status(400).send("Uncorrect username or password");
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

router.post(
  "/login",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await findUserByUsername(req.db, username);

      if (!user || user.password !== hash(password)) {
        res.redirect("/?authError=true");
      } else {
        const sessionId = await createSession(req.db, user._id.toString());
        res.cookie("sessionId", sessionId, { httpOnly: true }).redirect("/");
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

router.post("/logout", auth(), async (req, res) => {
  if (!req.user) {
    res.redirect("/");
  }

  await deleteSession(req.sessionId);
  res.clearCookie("sessionId").redirect("/");
});

module.exports = router;
