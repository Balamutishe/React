import { Router, Response } from "express";
import {
  IRequestTypes,
  TResponseTasksGetAll,
  TResponseTaskCreate,
} from "../types";
import { HTTP_STATUSES } from "../utils";
import { tasksService } from "../domain";
import { taskBodyParser } from "../middleware";
import { auth } from "../middleware/auth";

export const taskRouter = Router();
taskRouter.use(auth);

taskRouter.get(
  "/",
  auth,
  async (req: IRequestTypes, res: TResponseTasksGetAll) => {
    const queryTitle = req.query.title;

    const { pagesCountValue, skipValue, limitValue } =
      await tasksService.queryPagesDataTransform(
        Number(req.query.pageSize),
        Number(req.query.pageNumber),
        queryTitle
      );

    if (queryTitle) {
      const tasksFiltered = await tasksService.taskFindByFilter(
        queryTitle,
        skipValue,
        limitValue
      );

      if (tasksFiltered.length === 0) {
        const tasks = await tasksService.tasksFindAll(limitValue, skipValue);

        res.status(HTTP_STATUSES.OK_200).json({
          message: "Tasks by title not found",
          data: { tasks, pagesCountValue },
        });

        return;
      }

      res.status(HTTP_STATUSES.OK_200).json({
        message: "Successfully filtered",
        data: { tasks: tasksFiltered, pagesCountValue },
      });

      return;
    }

    const tasks = await tasksService.tasksFindAll(limitValue, skipValue);

    res.status(HTTP_STATUSES.OK_200).json({
      message: "Tasks received successfully",
      data: { tasks, pagesCountValue },
    });
  }
);

taskRouter.post(
  "/",
  taskBodyParser,
  async (req: IRequestTypes, res: TResponseTaskCreate) => {
    const taskCreateResult = await tasksService.taskCreate(req.body);

    if (!taskCreateResult.acknowledged) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .send({ message: "task not created", data: null });
    } else {
      const newTask = await tasksService.taskFindById(
        taskCreateResult.insertedId.toString()
      );

      res
        .status(HTTP_STATUSES.CREATED_201)
        .json({ message: "task successfully created", data: newTask });
    }
  }
);

taskRouter.get("/:id", async (req: IRequestTypes, res: Response) => {
  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const task = await tasksService.taskFindById(req.params.id);

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
  taskBodyParser,
  async (req: IRequestTypes, res: Response) => {
    if (!req.params.id) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
      return;
    }

    const taskUpdateResult = await tasksService.taskUpdate(
      req.params.id,
      req.body
    );

    if (taskUpdateResult.matchedCount !== 0) {
      const taskUpdated = await tasksService.taskFindById(req.params.id);

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
  if (!req.params.id) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const tasksDeletedResult = await tasksService.taskDelete(req.params.id);

  if (tasksDeletedResult.deletedCount !== 0) {
    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "task successfully deleted" });
  } else {
    res
      .status(HTTP_STATUSES.BAD_REQUEST_400)
      .json({ message: "task not deleted" });
  }
});
