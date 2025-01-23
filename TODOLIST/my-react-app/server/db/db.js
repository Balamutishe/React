const crypto = require("crypto");

if (typeof localStorage === "undefined" || localStorage === null) {
  let LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./db/NoteList");
}

async function restoreNotesList(nameStorage) {
  let data = [];

  if (localStorage !== null && localStorage.length !== 0) {
    data = localStorage.getItem(nameStorage);
    return await JSON.parse(data);
  }

  return data;
}

const saveNotesList = async (data) => {
  localStorage.setItem("NoteList", JSON.stringify(data));
};

const createNote = async (title, text) => {
  const note = {
    id: crypto.randomUUID(),
    title: title,
    text: text,
  };

  const database = await restoreNotesList("NoteList");

  const updateDatabase = [...database, note];
  await saveNotesList(updateDatabase);

  return note;
};

const getOneNote = async (id) => {
  const database = await restoreNotesList("NoteList");
  const note = await database.find((note) => note.id === id);
  console.log(note);
  return note;
};

const deleteNote = async (id) => {
  const database = await restoreNotesList("NoteList");
  const filterParseData = await database.filter((note) => note.id !== id);

  await saveNotesList(filterParseData);

  return filterParseData;
};

const changeNote = async (id, noteTitle, noteText) => {
  const database = await restoreNotesList("NoteList");

  const updateDatabase = database.map((item) => {
    if (item.id === id) {
      item.title = noteTitle;
      item.text = noteText;
    }

    return item;
  });

  await saveNotesList(updateDatabase);

  return updateDatabase;
};

module.exports = {
  restoreNotesList,
  getOneNote,
  createNote,
  deleteNote,
  changeNote,
};
