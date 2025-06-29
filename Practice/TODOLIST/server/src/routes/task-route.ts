import { Router } from "express";
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
  TTaskBody,
  TTaskParams,
  TTaskQuery,
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
import { taskBodyParser } from "../middleware/taskBodyParser";

export const taskRouter = Router();
//   title: z
//     .string()
//     .min(3, "The minimum length of the title is at least three characters")
//     .max(
//       50,
//       "The maximum length of the title is no more than fifty characters"
//     ),
//   status: z.string().optional(),
//   description: z.string().optional(),
//   priority: z.string().optional(),
//   due_date: z.string().optional(),
// });

// const TaskBodyParserMiddleware =
//   () => (req: Request, res: Response, next: NextFunction) => {
//     const bodyResult = TaskBodySchema.safeParse(req.body);

//     if (bodyResult.success) {
//       next();
//     } else {
//       const errors = bodyResult.error.errors.map((err) => {
//         return {
//           errorField: err.path.toString(),
//           message: err.message,
//         };
//       });

//       res.status(HTTP_STATUSES.BAD_REQUEST_400).send(errors);
//     }
//   };

taskRouter.get(
  "/",
  (req: TRequestWithQuery<TTaskQuery>, res: TResponseTasksGetAll) => {
    let tasks = [...db.tasks];

    if (req.query.title) {
      tasks = tasksFilterBySearchValue(tasks, req.query.title);
    }

    res.status(HTTP_STATUSES.OK_200).json(tasks);
  }
);

taskRouter.post(
  "/",
  taskBodyParser(),
  (req: TRequestWithBody<TTaskBody>, res: TResponseTaskCreate) => {
    const tasks = [...db.tasks];

    const newTask = taskCreate(db.tasks, req.body);

    if (tasks.length === db.tasks.length) {
      res
        .status(HTTP_STATUSES.NOT_FOUND_404)
        .send({ message: "task not created" });
    } else {
      res
        .status(HTTP_STATUSES.CREATED_201)
        .json({ message: "task successfully created", data: newTask });
    }
  }
);

taskRouter.get(
  "/:id",
  (req: TRequestWithParams<TTaskParams>, res: TResponseTaskGetOne) => {
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
  taskBodyParser(),
  (
    req: TRequestWithParamsAndBody<TTaskParams, TTaskBody>,
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
  (req: TRequestWithParams<TTaskParams>, res: TResponseTaskDelete) => {
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
