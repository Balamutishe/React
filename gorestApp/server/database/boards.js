const { ObjectId } = require("mongodb");

const getBoards = async (db, data) => {
  return await db.collection("boards").find(data).toArray();
};

const getOneBoard = async (db, id) => {
  return await db.collection("boards").findOne({ _id: new ObjectId(id) });
};

const addBoard = async (db, data) => {
  return await db.collection("boards").insertOne(data);
};

const changeBoard = async (db, id, data) => {
  return await db
    .collection("boards")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
};

const deleteBoard = async (db, id) => {
  return await db.collection("boards").deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  getBoards,
  getOneBoard,
  addBoard,
  changeBoard,
  deleteBoard,
};
