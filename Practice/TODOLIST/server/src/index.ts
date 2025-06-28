import express from "express";
import { randomUUID } from "crypto";

const app = express();
const port = process.env.PORT || 3000;

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db = {
  tasks: [
    {
      id: "1",
      title: "Task1",
      status: "success",
      description: "Task description",
      priority: "high",
      due_date: new Date(),
    },
    {
      id: "2",
      title: "Task2",
      status: "success",
      description: "Task description",
      priority: "low",
      due_date: new Date(),
    },
    {
      id: "3",
      title: "Task3",
      status: "not completed",
      description: "Task description",
      priority: "low",
      due_date: new Date(),
    },
    {
      id: "4",
      title: "Task4",
      status: "not completed",
      description: "Task description",
      priority: "medium",
      due_date: new Date(),
    },
  ],
};

app.get("/tasks", (req, res) => {
  let tasks = db.tasks;

  if (req.query.title) {
    const searchString = req.query.title.toString();
    tasks = tasks.filter((c) => c.title.includes(searchString));
  }

  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const task = db.tasks.find((c) => c.id === req.params.id);

  if (!task) {
    res.sendStatus(404);
    return;
  }

  res.status(200).json(task);
});

app.post("/tasks", (req, res) => {
  const tasks = [...db.tasks];

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

  tasks.push(newTask);

  if (tasks.length === db.tasks.length) {
    res.status(404).json({ message: "task not created" });
  } else {
    res
      .status(201)
      .json({ message: "task successfully created", data: newTask });
  }
});

app.patch("/tasks/:id", (req, res) => {
  let tasks = [...db.tasks];

  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const updateTasks = tasks.map((c) => {
    if (c.id === req.params.id && req.body) {
      return {
        ...c,
        ...req.body,
      };
    }

    return c;
  });

  res
    .status(201)
    .json({ message: "Array modified successfully", data: updateTasks });
});

app.delete("/tasks/:id", (req, res) => {
  let tasks = [...db.tasks];

  if (!req.params.id) {
    res.sendStatus(404);
    return;
  }

  tasks = tasks.filter((c) => c.id === req.params.id);

  if (tasks.length === db.tasks.length) {
    res.status(404).json({ message: "task not deleted" });
  } else {
    res.status(200).json({ message: "task successfully delete" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
