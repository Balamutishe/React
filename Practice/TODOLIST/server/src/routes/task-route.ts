import { Router } from "express";
import { TTaskBodyModel, TTaskParamsModel, TTaskQueryModel } from "../models";
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
} from "../types";
import { db } from "../db/db";
import { HTTP_STATUSES } from "../utils";
import {
  taskCreate,
  taskDelete,
  taskFindById,
  tasksFilterBySearchValue,
  tasksUpdate,
} from "../repository";

export const taskRouter = Router();

taskRouter.get(
  "/",
  (req: TRequestWithQuery<TTaskQueryModel>, res: TResponseTasksGetAll) => {
    let tasks = [...db.tasks];

    if (req.query.title) {
      tasks = tasksFilterBySearchValue(tasks, req.query.title);
    }

    res.status(HTTP_STATUSES.OK_200).json(tasks);
  }
);

taskRouter.post(
  "/",
  (req: TRequestWithBody<TTaskBodyModel>, res: TResponseTaskCreate) => {
    const tasks = [...db.tasks];

    if (!req.body.title) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const newTask = taskCreate(db.tasks, req.body);

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

taskRouter.get(
  "/:id",
  (req: TRequestWithParams<TTaskParamsModel>, res: TResponseTaskGetOne) => {
    const tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const task = taskFindById(tasks, req.params.id);

    if (!task) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
      return;
    }

    res.status(HTTP_STATUSES.OK_200).json(task);
  }
);

taskRouter.patch(
  "/:id",
  (
    req: TRequestWithParamsAndBody<TTaskParamsModel, TTaskBodyModel>,
    res: TResponseTaskPatch
  ) => {
    let tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const tasksNew = tasksUpdate(tasks, req.params.id, req.body);

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Tasks modified successfully", data: tasksNew });
  }
);

taskRouter.delete(
  "/:id",
  (req: TRequestWithParams<TTaskParamsModel>, res: TResponseTaskDelete) => {
    let tasks = [...db.tasks];

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    tasks = taskDelete(tasks, req.params.id);

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
