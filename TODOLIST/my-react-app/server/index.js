const express = require("express");
const app = express();
const {
  restoreNotesList,
  createNote,
  getOneNote,
  deleteNote,
} = require("./db/db.js");

app.use(express.json());

app.post("/", async (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    res.send("Введите корректные значения").redirect("/createNoteError=error");
  } else {
    const note = await createNote(title, text);
    res.status(201).send(note);
  }
});

app.get("/", async (req, res) => {
  const data = await restoreNotesList("NoteList");
  if (!data) {
    return res.status(400).send("Список не найден");
  } else {
    return res.status(200).json(data);
  }
});

app.post("/notes/:id", async (req, res) => {
  const { id } = req.body;

  const note = await getOneNote(id);

  if (note) {
    return res.status(200).json(note);
  } else {
    return res.status(404).send("Запись не найдена");
  }
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.body;

  const filterData = await deleteNote(id);

  console.log(filterData);

  // const filterData = await deleteNote(id);
  // console.log(filterData);
  // if (filterData) {
  //   return res.status(200).send(`Запись ${id} удалена`);
  // } else {
  //   return res.status(404).send("Запись не найдена");
  // }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
