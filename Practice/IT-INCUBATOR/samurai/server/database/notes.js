const getNotes = async (db, data) => {
  return await db.collection("notes").find(data).toArray();
};

const getOneNote = async (db, id) => {
  return await db.collection("notes").findOne({ id });
};

const addNote = async (db, data) => {
  return await db.collection("notes").insertOne(data);
};

const changeNote = async (db, id, data) => {
  return await db.collection("notes").updateOne({ _id: id }, { $set: data });
};

const deleteNote = async (db, id) => {
  return await db.collection("notes").deleteOne({ _id: id });
};

const deleteManyNotes = async (db, id) => {
  return await db.collection("notes").deleteMany({ boardId: id });
};

module.exports = {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
  deleteManyNotes,
};
