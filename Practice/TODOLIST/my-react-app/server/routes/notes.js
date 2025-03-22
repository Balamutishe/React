const router = require("express").Router();
const pick = require("lodash/pick");
const bodyParser = require("body-parser");

const {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
} = require("../database/notes.js");

const { auth } = require("../database/users.js");

router.get("/notes", auth(), async (req, res) => {
  try {
    const { id } = req.user;

    if (id) {
      const notes = await getNotes(id).then((results) =>
        results.map((item) =>
          pick(item, "id", "title", "description", "created_at")
        )
      );

      res.json(notes);
    } else {
      res.status(400).send({ message: "Uncorrect request.body" });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post(
  "/notes",
  bodyParser.urlencoded({ extended: false }),
  auth(),
  async (req, res) => {
    const { title, description } = req.body;

    const data = {
      title: title,
      description: description,
      created_at: new Date(),
      user_id: req.user.id,
    };

    if (data) {
      const countAddNote = await addNote(data);

      if (countAddNote === 0) {
        res.status(404).send(`Note not created`);
      } else {
        res.status(201).send(`Note created`);
      }
    } else {
      res.send("Uncorrect request.body");
    }
  }
);

router.get("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const note = await getOneNote(Number(id)).then((note) =>
        pick(note, "id", "title", "description", "created_at")
      );

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

router.patch("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const data = pick(req.body, "title", "description");

      if (data) {
        const countChangeNote = await changeNote(Number(id), data);

        if (countChangeNote === 0) {
          res.status(404).send(`Unknown note ID: ${id}`);
        } else {
          res.status(200).send(`Note ${id} changed`);
        }
      }
    } else {
      res.send("Uncorrect request.body");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete(
  "/notes/:id",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const id = req.params.id;

      if (id) {
        const countDeleteNote = await deleteNote(Number(id));

        if (countDeleteNote === 0) {
          res.status(404).send({ message: `Unknown note ID: ${id}` });
        } else {
          res.status(204).send({ message: `Note ${id} delete` });
        }
      } else {
        res.send(`req.params.id undefined`);
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

module.exports = router;
