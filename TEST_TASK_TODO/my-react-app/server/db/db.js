const crypto = require("crypto");

const hash = (data) => crypto.createHash("sha256").update(data).digest("hex");

const DB = {
  users: [],
  notes: [],
  sessions: {},
};

const createUser = async ({ username, email, password }) => {
  if (!username || !password || !email) {
    throw new Error("Введите корректные данные пользователя");
  }

  const user = {
    id: crypto.randomUUID(),
    email: email,
    username: username,
    password: hash(password),
  };

  DB.users.push(user);

  return user;
};

const findUserByUserEmail = async (email) => {
  return DB.users.find((user) => user.email === email);
};

const findUserBySessionId = async (sessionId) => {
  const userId = DB.sessions[sessionId];
  if (!userId) return;
  return DB.users.find((u) => u.id === userId);
};

const createSession = async (userId) => {
  const sessionId = crypto.randomUUID();
  DB.sessions[sessionId] = userId;
  return sessionId;
};

const deleteSession = async (sessionId) => {
  delete DB.sessions[sessionId];
};

const auth = () => async (req, res, next) => {
  if (!req.cookies["sessionId"]) {
    return next();
  }

  const user = await findUserBySessionId(req.cookies["sessionId"]);

  req.user = user;
  req.sessionId = req.cookies["sessionsId"];
  next();
};

module.exports = {
  DB,
  createUser,
  findUserByUserEmail,
  findUserBySessionId,
  createSession,
  deleteSession,
  auth,
  hash,
};
