import { Router, Response } from "express";
import { IRequestTypes, TResponseTaskCreate } from "../types";
import { HTTP_STATUSES } from "../utils";
import {
  taskCreate,
  taskDelete,
  taskFindById,
  tasksFilterBySearchValue,
  tasksGetAll,
  tasksUpdate,
} from "../repository";
import { taskBodyParser } from "../middleware/taskBodyParser";
import { DbFetch } from "../middleware/fetchDb";

export const taskRouter = Router();
taskRouter.use(DbFetch());

taskRouter.get("/", async (req: IRequestTypes, res: Response) => {
  if (!req.db) {
    res.sendStatus(500);
    return;
  }

  const tasks = await tasksGetAll(req.db);

  if (req.query.title) {
    const tasksFiltered = await tasksFilterBySearchValue(req.db, req.query);
    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Successfully filtered", data: tasksFiltered });
  }

  res.status(HTTP_STATUSES.OK_200).json({ message: "No filter", data: tasks });
});

taskRouter.post(
  "/",
  taskBodyParser(),
  async (req: IRequestTypes, res: Response) => {
    if (!req.db) {
      res.sendStatus(500);
      return;
    }

    const newTask = await taskCreate(req.db, req.body);

    res
      .status(HTTP_STATUSES.CREATED_201)
      .json({ message: "task successfully created", data: newTask });

    // if (req.db && req.db.length === db.tasks.length) {
    //   res
    //     .status(HTTP_STATUSES.NOT_FOUND_404)
    //     .send({ message: "task not created" });
    // } else {
    //   res
    //     .status(HTTP_STATUSES.CREATED_201)
    //     .json({ message: "task successfully created", data: newTask });
    // }
  }
);

taskRouter.get("/:id", async (req: IRequestTypes, res: Response) => {
  if (!req.db) {
    res.sendStatus(500);
    return;
  }

  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const task = await taskFindById(req.db, req.params.id);

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
    if (!req.db) {
      res.sendStatus(500);
      return;
    }

    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const tasksNew = tasksUpdate(req.db, req.params.id, req.body);

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Tasks modified successfully", data: tasksNew });
  }
);

taskRouter.delete("/:id", (req: IRequestTypes, res: Response) => {
  if (!req.db) {
    res.sendStatus(500);
    return;
  }

  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const tasksUpdate = taskDelete(req.db, req.params.id);

  // if (req.db.length === tasksUpdate.length) {
  //   res
  //     .status(HTTP_STATUSES.NOT_FOUND_404)
  //     .json({ message: "task not deleted" });
  // } else {
  //   res
  //     .status(HTTP_STATUSES.NO_CONTENT_204)
  //     .json({ message: "task successfully deleted" });
  // }
});
