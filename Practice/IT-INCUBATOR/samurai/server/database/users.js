const crypto = require("crypto");

const hash = (data) => crypto.createHash("sha256").update(data).digest("hex");

async function getUsers(db) {
  return await db.collection("users").find().toArray();
}

async function getUserById(db, id) {
  return await db.collection("users").findOne({ _id: id });
}

async function createUser(db, data) {
  return await db.collection("users").insertOne(data);
}

async function deleteUser(db, id) {
  return await db.collection("users").deleteOne({ _id: id });
}

async function updateUser(db, id, data) {
  return await db.collection("users").updateOne({ _id: id }, data);
}

async function findUserByUsername(db, username) {
  return await db.collection("users").findOne({ username });
}

async function findUserBySessionId(db, sessionId) {
  const session = await db
    .collection("sessions")
    .findOne({ sessionId }, { projection: { userId: true } });

  if (!session) {
    return;
  }

  return await db.collection("users").findOne({ _id: session.userId });
}

async function createSession(db, userId) {
  const sessionId = crypto.randomUUID();

  await db.collection("sessions").insertOne({ sessionId, userId });

  return sessionId;
}

async function deleteSession(db, sessionId) {
  return await db.collection("sessions").deleteOne({ sessionId });
}

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
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  createSession,
  deleteSession,
  findUserByUsername,
  auth,
  hash,
};
