const crypto = require("crypto");
const { response } = require("express");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./db");

const restoreNotesList = async (nameStorage) => {
  // return await localStorage.getItem(nameStorage);
  return (rawNotesList = localStorage.getItem(nameStorage) || []);
};

let database = [];

(async () => {
  database = await restoreNotesList("NoteList");
})();

const saveNotesList = async (data) => {
  localStorage.setItem("NoteList", JSON.stringify(data));
};

const createNote = async (title, text) => {
  const note = {
    id: crypto.randomUUID(),
    title: title,
    text: text,
  };

  database = [...database, note];

  await saveNotesList(database);

  return note;
};

const getOneNote = async (id) => {
  const data = await JSON.parse(database);
  return data.find((note) => note.id === id);
};

const deleteNote = async (id) => {
  const data = await restoreNotesList("NoteList");
  const parseData = await JSON.parse(data);

  const filterParseData = parseData.filter((note) => note.id !== id);

  database = [...filterParseData];

  await saveNotesList(database);

  return database;
};

module.exports = {
  restoreNotesList,
  getOneNote,
  createNote,
  deleteNote,
};
