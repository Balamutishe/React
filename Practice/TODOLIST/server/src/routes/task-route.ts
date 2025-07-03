import { Router, Response } from "express";
import { IRequestTypes, TResponseTasksGetAll } from "../types";
import { HTTP_STATUSES } from "../utils";
import { tasksService } from "../domain";
import { taskBodyParser, DbFetch } from "../middleware";
import { dataPageTransform } from "../utils/dataPageTransform";

export const taskRouter = Router();
taskRouter.use(DbFetch("tasks"));

taskRouter.get("/", async (req: IRequestTypes, res: TResponseTasksGetAll) => {
  if (!req.collection) {
    res.sendStatus(500);
    return;
  }

  const queryTitle = req.query.title;
  const queryPageNumber = Number(req.query.pageNumber) || 1;
  const queryPageSize = Number(req.query.pageSize) || 5;

  const { pagesCountValue, skipValue, limitValue } =
    await tasksService.queryPagesDataTransform(
      req.collection,
      queryPageSize,
      queryPageNumber,
      queryTitle
    );

  if (queryTitle) {
    const tasksFiltered = await tasksService.taskFindByFilter(
      req.collection,
      queryTitle,
      skipValue,
      limitValue
    );

    if (tasksFiltered.length === 0) {
      const tasks = await tasksService.tasksFindAll(
        req.collection,
        limitValue,
        skipValue
      );

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

  const tasks = await tasksService.tasksFindAll(
    req.collection,
    limitValue,
    skipValue
  );

  res.status(HTTP_STATUSES.OK_200).json({
    message: "Tasks received successfully",
    data: { tasks, pagesCountValue },
  });
});

taskRouter.post(
  "/",
  taskBodyParser(),
  async (req: IRequestTypes, res: Response) => {
    if (!req.collection) {
      res.sendStatus(500);
      return;
    }

    const taskCreateResult = await tasksService.taskCreate(
      req.collection,
      req.body
    );

    if (!taskCreateResult.acknowledged) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .send({ message: "task not created" });
    } else {
      const newTask = await tasksService.taskFindById(
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

  const task = await tasksService.taskFindById(req.collection, req.params.id);

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

    const taskUpdateResult = await tasksService.taskUpdate(
      req.collection,
      req.params.id,
      req.body
    );

    if (taskUpdateResult.matchedCount !== 0) {
      const taskUpdated = await tasksService.taskFindById(
        req.collection,
        req.params.id
      );

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

  const tasksDeletedResult = await tasksService.taskDelete(
    req.collection,
    req.params.id
  );

  if (tasksDeletedResult.deletedCount !== 0) {
    res
      .status(HTTP_STATUSES.NO_CONTENT_204)
      .json({ message: "task successfully deleted" });
  } else {
    res
      .status(HTTP_STATUSES.BAD_REQUEST_400)
      .json({ message: "task not deleted" });
  }
});
