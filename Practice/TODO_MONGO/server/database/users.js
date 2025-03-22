const crypto = require("node:crypto");
const { ObjectId } = require("mongodb");

const hash = (data) => crypto.createHash("sha256").update(data).digest("hex");

const createUser = async (db, username, password) =>
  await db
    .collection("users")
    .insertOne({ username: username, password: hash(password) });

const findUserByUsername = async (db, username) =>
  await db.collection("users").findOne({ username });

const findUserBySessionId = async (db, sessionId) => {
  const session = await db
    .collection("sessions")
    .findOne({ sessionId }, { projection: { userId: true } });

  if (!session) {
    return;
  }

  return await db
    .collection("users")
    .findOne({ _id: new ObjectId(session.userId) });
};

const createSession = async (db, userId) => {
  const sessionId = crypto.randomUUID();

  await db.collection("sessions").insertOne({
    sessionId,
    userId,
  });

  return sessionId;
};

const deleteSession = async (db, sessionId) =>
  await db.collection("sessions").deleteOne({ sessionId });

const auth = () => async (req, res, next) => {
  if (!req.cookies["sessionId"]) {
    return next();
  }

  const user = await findUserBySessionId(req.db, req.cookies["sessionId"]);

  req.user = user;
  req.sessionId = req.cookies["sessionId"];

  next();
};

module.exports = {
  createUser,
  findUserByUsername,
  findUserBySessionId,
  createSession,
  deleteSession,
  auth,
  hash,
};
