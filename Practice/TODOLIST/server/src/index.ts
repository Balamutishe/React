import express from "express";
import { randomUUID } from "crypto";

const app = express();
const port = process.env.PORT || 3000;

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db = {
  tasks: [
    {
      id: randomUUID(),
      title: "Task1",
      status: "success",
      description: "Task description",
      priority: "high",
      due_date: new Date(),
    },
    {
      id: randomUUID(),
      title: "Task2",
      status: "success",
      description: "Task description",
      priority: "low",
      due_date: new Date(),
    },
    {
      id: randomUUID(),
      title: "Task3",
      status: "not completed",
      description: "Task description",
      priority: "low",
      due_date: new Date(),
    },
    {
      id: randomUUID(),
      title: "Task4",
      status: "not completed",
      description: "Task description",
      priority: "medium",
      due_date: new Date(),
    },
  ],
};

app.get("/tasks", (req, res) => {
  let foundTasks = db.tasks;

  if (req.query.title) {
    foundTasks = foundTasks.filter((c) =>
      c.title.includes(req.query.title as string)
    );
  }

  res.json(foundTasks);
});

app.get("/tasks/:id", (req, res) => {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const foundTasks = db.tasks.find((c) => c.id === req.params.id);

  if (!foundTasks) {
    res.sendStatus(404);
    return;
  }

  res.json(foundTasks);
});

app.post("/tasks", (req, res) => {
  if (!req.body.title) {
    res.sendStatus(400);
    return;
  }

  const newTask = {
    id: randomUUID(),
    title: req.body.title,
    status: "not completed",
    description: req.body.description
      ? req.body.description
      : "Task description",
    priority: req.body.priority ? req.body.priority : "low",
    due_date: new Date(),
  };

  db.tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/tasks/:id", (req, res) => {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const updateTasks = db.tasks.map((c) => {
    if (c.id === req.params.id && req.body.title) {
      return {
        ...c,
        title: req.body.title,
      };
    }

    return c;
  });

  if (db.tasks.toString() === updateTasks.toString()) {
    res
      .status(204)
      .json({ message: "The array is not modified", data: updateTasks });
  }

  res
    .status(201)
    .json({ message: "Array modified successfully", data: updateTasks });
});

app.delete("/tasks/:id", (req, res) => {
  if (!req.params.id) {
    res.sendStatus(404);
    return;
  }

  db.tasks = db.tasks.filter((c) => c.id === req.params.id);

  if (db.tasks.find((c) => c.id === req.params.id)) {
    res.status(404).json({ errorMessage: "Course not deleted" });
  }

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
