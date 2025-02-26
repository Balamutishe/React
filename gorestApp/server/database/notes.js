const { ObjectId } = require("mongodb");

const getNotes = async (db, boardId) => {
  return await db.collection("notes").find({ boardId }).toArray();
};

const getOneNote = async (db, id) => {
  return await db.collection("notes").findOne({ _id: new ObjectId(id) });
};

const addNote = async (db, data) => {
  return await db.collection("notes").insertOne(data);
};

const changeNote = async (db, id, data) => {
  return await db
    .collection("notes")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
};

const deleteNote = async (db, id) => {
  return await db.collection("notes").deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
};
