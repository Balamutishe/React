import express from "express";
import { randomUUID } from "crypto";
import { TTaskBodyModel, TTaskParamsModel, TTaskQueryModel } from "./models";
import {
  TRequestWithBody,
  TRequestWithParams,
  TRequestWithParamsAndBody,
  TRequestWithQuery,
  TResponseTaskCreate,
  TResponseTaskDelete,
  TResponseTaskGetOne,
  TResponseTaskPatch,
  TResponseTasksGetAll,
  TTasksList,
} from "./types";

const app = express();
const port = process.env.PORT || 3000;

export const HTTP_STATUSES = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,
  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,
};

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db: { tasks: TTasksList } = {
  tasks: [
    {
      id: "1",
      title: "Task1",
      status: "success",
      description: "Task description",
      priority: "high",
      due_date: new Date().toDateString(),
    },
    {
      id: "2",
      title: "Task2",
      status: "success",
      description: "Task description",
      priority: "low",
      due_date: new Date().toDateString(),
    },
    {
      id: "3",
      title: "Task3",
      status: "not completed",
      description: "Task description",
      priority: "low",
      due_date: new Date().toDateString(),
    },
    {
      id: "4",
      title: "Task4",
      status: "not completed",
      description: "Task description",
      priority: "medium",
      due_date: new Date().toDateString(),
    },
  ],
};

app.get(
  "/tasks",
  (req: TRequestWithQuery<TTaskQueryModel>, res: TResponseTasksGetAll) => {
    let tasks = [...db.tasks];

    if (req.query.title) {
      const searchString = req.query.title.toString();
      tasks = tasks.filter((c) => c.title.includes(searchString));
    }

    res.status(HTTP_STATUSES.OK_200).json(tasks);
  }
);

app.get(
  "/tasks/:id",
  (req: TRequestWithParams<TTaskParamsModel>, res: TResponseTaskGetOne) => {
    const tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const task = tasks.find((c) => c.id === req.params.id);

    if (!task) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
      return;
    }

    res.status(HTTP_STATUSES.OK_200).json(task);
  }
);

app.post(
  "/tasks",
  (req: TRequestWithBody<TTaskBodyModel>, res: TResponseTaskCreate) => {
    const tasks = [...db.tasks];

    if (!req.body.title) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
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
      due_date: new Date().toDateString(),
    };

    tasks.push(newTask);

    if (tasks.length === db.tasks.length) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .json({ message: "task not created" });
    } else {
      res
        .status(HTTP_STATUSES.CREATED_201)
        .json({ message: "task successfully created", data: newTask });
    }
  }
);

app.patch(
  "/tasks/:id",
  (
    req: TRequestWithParamsAndBody<TTaskParamsModel, TTaskBodyModel>,
    res: TResponseTaskPatch
  ) => {
    let tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
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
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Tasks modified successfully", data: updateTasks });
  }
);

app.delete(
  "/tasks/:id",
  (req: TRequestWithParams<TTaskParamsModel>, res: TResponseTaskDelete) => {
    let tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    tasks = tasks.filter((c) => c.id === req.params.id);

    if (tasks.length === db.tasks.length) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .json({ message: "task not deleted" });
    } else {
      res
        .status(HTTP_STATUSES.NO_CONTENT_204)
        .json({ message: "task successfully deleted" });
    }
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
