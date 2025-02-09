const router = require("express").Router();
const bodyParser = require("body-parser");
const crypto = require("node:crypto");
const pick = require("lodash/pick");
const knex = require("../database/knexClient.js");

const {
  findUserByUsername,
  createSession,
  deleteSession,
  auth,
} = require("../database/users.js");

const hash = (data) => crypto.createHash("sha256").update(data).digest("hex");

router.get("/", auth(), async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const user = pick(req.user, "id", "username");

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
        const [userId] = await knex("users")
          .select()
          .insert({ username: username, password: hash(password) })
          .returning("id");

        res.status(201).send(`New user ID:${userId.id} created`);
      } else {
        res.status(400).send({ message: "Uncorrect username or password" });
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

      const user = await findUserByUsername(username);

      if (!user || user.password !== hash(password)) {
        res.redirect("/?authError=true");
      } else {
        const sessionId = await createSession(user.id);
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
