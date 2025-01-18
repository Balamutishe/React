const crypto = require("crypto");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./db");

const restoreNotesList = async (nameStorage) => {
  // return await localStorage.getItem(nameStorage);
  return (rawNotesList = localStorage.getItem(nameStorage) || []);
};

const database = restoreNotesList("NoteList");

const saveNotesList = async (data) => {
  localStorage.setItem("NoteList", JSON.stringify(data));
};

const createNote = async (title, text) => {
  const response = await restoreNotesList("NoteList");
  // const data = await response.json();
  const note = {
    id: crypto.randomUUID(),
    title: title,
    text: text,
    done: false,
  };

  console.log(response);

  // await saveNotesList(data);

  return note;
};

const getOneNote = async (id) => {
  return await database.find((note) => note.id === id);
};

module.exports = {
  database,
  restoreNotesList,
  createNote,
  getOneNote,
};
