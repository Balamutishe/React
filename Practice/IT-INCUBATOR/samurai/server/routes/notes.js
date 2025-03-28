const routerNote = require("express").Router();
const bodyParser = require("body-parser");
const fetchDb = require("../database/mongoClient.js");

const {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
} = require("../database/notes.js");

routerNote.use(
  async (req, res, next) => await fetchDb(req, res, next, "todolist")
);

routerNote.get("/notes", async (req, res) => {
  try {
    const notesList = await getNotes(req.db, req.query);

    if (notesList) {
      res.status(200).json(notesList);
    } else {
      res.status(404).send("notesList not found");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routerNote.post(
  "/notes",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    const { boardId } = req.body;

    if (boardId) {
      const countAddNote = await addNote(req.db, {
        _id: crypto.randomUUID(),
        noteText: "Новая запись",
        created_at: Date.now(),
        boardId: boardId,
      });

      if (countAddNote === 0) {
        res.status(404).send("Note not created");
      } else {
        return res.json(countAddNote.insertedId);
      }
    } else {
      res.send("Uncorrect request.body");
    }
  }
);

routerNote.get("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const note = await getOneNote(req.db, id);

      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).send(`Note ${id} not found`);
      }
    } else {
      res.status(400).send("Uncorrect request.body");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routerNote.patch(
  "/notes/:id",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const { noteText } = req.body;

      if (noteText && id) {
        const countChangeNote = await changeNote(req.db, id, {
          noteText,
        });

        if (countChangeNote === 0) {
          res.status(404).send(`Unknown note ID: ${id}`);
        } else {
          res.status(200).send(`Note ${id} changed`);
        }
      } else {
        res.status(400).send("Uncorrect request.body");
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

routerNote.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const countDeleteNote = await deleteNote(req.db, id);

      if (countDeleteNote === 0) {
        res.status(404).send(`Unknown note ID: ${id}`);
      } else {
        res.status(200).send(`Note ${id} delete`);
      }
    } else {
      res.send(`req.params.id undefined`);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = routerNote;
