const express = require("express");
const app = express();
const {
  restoreNotesList,
  createNote,
  getOneNote,
  deleteNote,
  changeNote,
} = require("./db/db.js");

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
    return res.status(400).send("Список не найден");
  } else {
    return res.status(200).json(data);
  }
});

app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;

  const note = await getOneNote(id);

  if (note) {
    return res.status(200).json(note);
  } else {
    return res.status(404).send({ message: "Запись не найдена" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "Невалидный запрос" });
  } else {
    await deleteNote(id);
    return res.status(201).send({ message: "Запись успешно удалена" });
  }
});

app.patch("/notes/:id", async (req, res) => {
  const { id, noteTitle, noteText } = req.body;

  console.log({ id, noteTitle, noteText });

  if (!id) {
    return res.status(400).send({ message: "Невалидный запрос" });
  } else {
    await changeNote(id, noteTitle, noteText);
    return res.status(201).send({ message: "Запись успешно изменена" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
