import z from "zod";
import { Request, Response } from "express";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  description: z.string(),
  priority: z.string(),
  due_date: z.string(),
});
export const TasksListSchema = z.array(TaskSchema);

export type TTask = z.infer<typeof TaskSchema>;
export type TTasksList = z.infer<typeof TasksListSchema>;

export type TRequestWithBody<T> = Request<{}, {}, T>;
export type TRequestWithParams<T> = Request<T>;
export type TRequestWithParamsAndBody<T, O> = Request<T, {}, O>;
export type TRequestWithQuery<T> = Request<{}, {}, {}, T>;

export type TResponseTasksGetAll = Response<TTasksList>;
export type TResponseTaskGetOne = Response<TTask>;
export type TResponseTaskPatch = Response<{
  message: string;
  data?: TTasksList;
}>;
export type TResponseTaskCreate = Response<{
  message: string;
  data?: TTask;
}>;
export type TResponseTaskDelete = Response<{ message: string }>;
