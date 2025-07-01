import { Router, Response } from "express";
import { IRequestTypes, TResponseTaskCreate, TTasksList } from "../types";
import { HTTP_STATUSES } from "../utils";
import {
  taskCreate,
  taskDelete,
  taskFindById,
  taskGetOne,
  tasksFilterBySearchValue,
  tasksGetAll,
  tasksUpdate,
} from "../repository";
import { taskBodyParser } from "../middleware/taskBodyParser";
import { DbFetch } from "../middleware/fetchDb";

export const taskRouter = Router();
taskRouter.use(DbFetch("tasks"));

taskRouter.get("/", async (req: IRequestTypes, res: Response) => {
  if (!req.collection) {
    res.sendStatus(500);
    return;
  }

  if (req.query.title) {
    const tasksFiltered = await tasksFilterBySearchValue(
      req.collection,
      req.query.title
    );

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Successfully filtered", data: tasksFiltered });
  } else {
    const tasks = await tasksGetAll(req.collection);
    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "No filter", data: tasks });
  }
});

taskRouter.post(
  "/",
  taskBodyParser(),
  async (req: IRequestTypes, res: Response) => {
    if (!req.collection) {
      res.sendStatus(500);
      return;
    }

    const taskCreateResult = await taskCreate(req.collection, req.body);

    if (!taskCreateResult.acknowledged) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .send({ message: "task not created" });
    } else {
      const newTask = await taskGetOne(
        req.collection,
        taskCreateResult.insertedId.toString()
      );

      res
        .status(HTTP_STATUSES.CREATED_201)
        .json({ message: "task successfully created", data: newTask });
    }
  }
);

taskRouter.get("/:id", async (req: IRequestTypes, res: Response) => {
  if (!req.collection) {
    res.sendStatus(500);
    return;
  }

  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const task = await taskFindById(req.collection, req.params.id);

  if (!task) {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    return;
  } else {
    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Task successfully found", data: task });
  }
});

taskRouter.patch(
  "/:id",
  taskBodyParser(),
  (req: IRequestTypes, res: Response) => {
    if (!req.collection) {
      res.sendStatus(500);
      return;
    }

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const tasksNew = tasksUpdate(req.collection, req.params.id, req.body);

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Tasks modified successfully", data: tasksNew });
  }
);

taskRouter.delete("/:id", async (req: IRequestTypes, res: Response) => {
  if (!req.collection) {
    res.sendStatus(500);
    return;
  }

  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const tasksUpdate = await taskDelete(req.collection, req.params.id);

  res
    .status(HTTP_STATUSES.NO_CONTENT_204)
    .json({ message: "task successfully deleted" });
});
