const routerBoard = require("express").Router();
const bodyParser = require("body-parser");
const fetchDb = require("../database/mongoClient.js");

const {
  getBoards,
  getOneBoard,
  addBoard,
  changeBoard,
  deleteBoard,
} = require("../database/boards.js");

const { deleteManyNotes } = require("../database/notes.js");

routerBoard.use(
  async (req, res, next) => await fetchDb(req, res, next, "todolist")
);

routerBoard.get("/boards", async (req, res) => {
  try {
    const boardsList = await getBoards(req.db, req.query);

    if (boardsList) {
      res.status(200).json(boardsList);
    } else {
      res.status(404).send("boardsList not found");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routerBoard.post(
  "/boards",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    const countAddBoard = await addBoard(req.db, {
      _id: crypto.randomUUID(),
      boardTitle: "",
      created_at: Date.now(),
    });

    if (countAddBoard === 0) {
      res.status(404).send("Board not created");
    } else {
      res.status(201).send("Board created");
    }
  }
);

routerBoard.get("/boards/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const board = await getOneBoard(req.db, id);

      if (board) {
        res.status(200).json(board);
      } else {
        res.status(404).send(`Board ${id} not found`);
      }
    } else {
      res.status(400).send("Uncorrect request.body");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routerBoard.patch(
  "/boards/:id",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const { boardTitle } = req.body;

      if (boardTitle && id) {
        const countChangeBoard = await changeBoard(req.db, id, {
          boardTitle: boardTitle,
        });

        if (countChangeBoard === 0) {
          res.status(404).send(`Unknown board ID: ${id}`);
        } else {
          res.status(200).send(`Board ${id} changed`);
        }
      } else {
        res.status(400).send("Uncorrect request.body");
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

routerBoard.delete(
  "/boards/:id",
  bodyParser.urlencoded({ extended: false }),
  async (req, res) => {
    try {
      const id = req.params.id;

      if (id) {
        await deleteManyNotes(req.db, id);
        const countDeleteBoard = await deleteBoard(req.db, id);

        if (countDeleteBoard === 0) {
          res.status(404).send(`Unknown board ID: ${id}`);
        } else {
          res.status(200).send(`Board ${id} delete`);
        }
      } else {
        res.send(`req.params.id undefined`);
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

module.exports = routerBoard;
