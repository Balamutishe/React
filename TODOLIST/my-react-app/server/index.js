const express = require("express");
const app = express();
const { restoreNotesList, createNote } = require("./db/db.js");

app.use(express.json());

app.post("/", async (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    res.send("Введите корректные значения").redirect("/createNoteError=error");
  } else {
    const note = await createNote(title, text);
    res.status(201).send(note.id);
  }
});

app.get("/", async (req, res) => {
  const data = await restoreNotesList("NoteList");
  if (!data) {
    res.status(400).send("Список не найден");
  } else {
    res.status(200).json(data);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
