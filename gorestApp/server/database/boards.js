const getBoards = async (db, data) => {
  return await db.collection("boards").find(data).toArray();
};

const getOneBoard = async (db, id) => {
  return await db.collection("boards").findOne({ id });
};

const addBoard = async (db, data) => {
  return await db.collection("boards").insertOne(data);
};

const changeBoard = async (db, id, data) => {
  return await db.collection("boards").updateOne({ id }, { $set: data });
};

const deleteBoard = async (db, id) => {
  return await db.collection("boards").deleteOne({ id });
};

module.exports = {
  getBoards,
  getOneBoard,
  addBoard,
  changeBoard,
  deleteBoard,
};
