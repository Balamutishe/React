import { Router, Response } from "express";
import { IRequestTypes, TResponseTaskCreate, TTasksList } from "../types";
import { HTTP_STATUSES } from "../utils";
import { taskCreate, taskDelete, tasksFind, tasksUpdate } from "../repository";
import { taskBodyParser } from "../middleware/taskBodyParser";
import { DbFetch } from "../middleware/fetchDb";

export const taskRouter = Router();
taskRouter.use(DbFetch("tasks"));

taskRouter.get("/", async (req: IRequestTypes, res: Response) => {
  try {
    if (!req.collection) {
      res.sendStatus(500);
      return;
    }

    if (req.query.title) {
      const tasksFiltered = await tasksFind(
        req.collection,
        null,
        req.query.title
      );

      if (tasksFiltered && tasksFiltered.length === 0) {
        const tasks = await tasksFind(req.collection);
        res
          .status(HTTP_STATUSES.OK_200)
          .json({ message: "Tasks by title not found", data: tasks });
      } else {
        res
          .status(HTTP_STATUSES.OK_200)
          .json({ message: "Successfully filtered", data: tasksFiltered });
      }
    } else {
      const tasks = await tasksFind(req.collection);
      res
        .status(HTTP_STATUSES.OK_200)
        .json({ message: "Tasks received successfully", data: tasks });
    }
  } catch (err) {}
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
      const newTask = await tasksFind(
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

  const task = await tasksFind(req.collection, req.params.id);

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
  async (req: IRequestTypes, res: Response) => {
    if (!req.collection) {
      res.sendStatus(500);
      return;
    }

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const taskUpdateResult = await tasksUpdate(
      req.collection,
      req.params.id,
      req.body
    );

    if (taskUpdateResult.modifiedCount !== 0) {
      const taskUpdated = await tasksFind(req.collection, req.params.id);

      res.status(HTTP_STATUSES.OK_200).json({
        message: "Tasks modified successfully",
        data: taskUpdated,
      });
    } else {
      res.status(HTTP_STATUSES.BAD_REQUEST_400).json({
        message: "Task not updated",
      });
    }
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
