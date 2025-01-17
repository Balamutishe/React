import { randomUUID, createHash } from "crypto";
import { JSONFilePreset } from "lowdb/node";

export const db = await JSONFilePreset("db.json", {});

export const hash = (data) => createHash("sha256").update(data).digest("hex");

// const DB = {
//   users: [],
//   notes: [],
//   sessions: {},
// };

export const createUser = async ({ username, email, password }) => {
  if (!username || !password || !email) {
    throw new Error("Введите корректные данные пользователя");
  }

  const user = {
    id: randomUUID(),
    email: email,
    username: username,
    password: hash(password),
  };

  // DB.users.push(user);
  await db.update(({ users }) => {
    users[user.id] = user;
  });

  return user;
};

export const findUserByUserEmail = async (email) => {
  console.log(db.users);
  return db.users.find(([key, user]) => user.email === email);
};

export const findUserBySessionId = async (sessionId) => {
  const userId = db.sessions.find(([key, value]) => key === sessionId);
  // const userId = DB.sessions[sessionId];
  if (!userId) return;
  // return DB.users.find((u) => u.id === userId);
  return db.users.find(([key, user]) => user.id === id);
};

export const createSession = async (userId) => {
  const sessionId = crypto.randomUUID();
  // DB.sessions[sessionId] = userId;
  await db.update(({ sessions }) => {
    sessions[sessionId] = userId;
  });
  return sessionId;
};

export const deleteSession = async (sessionId) => {
  delete db.sessions[sessionId];
};

export const auth = () => async (req, res, next) => {
  if (!req.cookies["sessionId"]) {
    return next();
  }

  const user = await findUserBySessionId(req.cookies["sessionId"]);

  req.user = user;
  req.sessionId = req.cookies["sessionsId"];
  next();
};
