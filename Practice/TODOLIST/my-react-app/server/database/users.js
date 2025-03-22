const knex = require("./knexClient");
const crypto = require("node:crypto");

const findUserByUsername = async (username) => {
  return await knex("users")
    .select()
    .where({ username: username })
    .limit(1)
    .then((results) => results[0]);
};

const createSession = async (userId) => {
  const sessionId = crypto.randomUUID();

  await knex("sessions").select().insert({
    session_id: sessionId,
    user_id: userId,
  });

  return sessionId;
};

const findUserBySessionId = async (sessionId) => {
  const session = await knex("sessions")
    .select("user_id")
    .where({ session_id: sessionId })
    .limit(1)
    .then((results) => results[0]);

  if (!session) {
    return;
  }

  return await knex("users")
    .select()
    .where({ id: session.user_id })
    .limit(1)
    .then((results) => results[0]);
};

const deleteSession = async (sessionId) => {
  return await knex("sessions")
    .select()
    .where({ session_id: sessionId })
    .delete();
};

const auth = () => async (req, res, next) => {
  if (!req.cookies["sessionId"]) {
    return next();
  }

  const user = await findUserBySessionId(req.cookies["sessionId"]);

  req.user = user;
  req.sessionId = req.cookies["sessionId"];

  next();
};

module.exports = {
  findUserByUsername,
  findUserBySessionId,
  createSession,
  deleteSession,
  auth,
};
