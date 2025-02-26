const getNotes = async (db, boardId) => {
  return await db.collection("notes").find({ boardId }).toArray();
};

const getOneNote = async (db, id) => {
  return await db.collection("notes").findOne({ id });
};

const addNote = async (db, data) => {
  return await db.collection("notes").insertOne(data);
};

const changeNote = async (db, id, data) => {
  return await db
    .collection("notes")
    .findOneAndUpdate({ _id: id }, { $set: data });
};

const deleteNote = async (db, id) => {
  return await db.collection("notes").deleteOne({ _id: id });
};

module.exports = {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
};
