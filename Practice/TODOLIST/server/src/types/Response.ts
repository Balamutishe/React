import { Response } from "express";
import { TTask, TTasksList } from "./Task";
import { WithId } from "mongodb";

export type TResponseTasksGetAll = Response<{
  message: string;
  data: { tasks: WithId<TTask>[]; pagesCountValue: number };
}>;
export type TResponseTaskGetOne = Response<{
  message: string;
  data?: WithId<TTask>[] | undefined;
}>;
export type TResponseTaskPatch = Response<{
  message: string;
  data?: TTasksList;
}>;
export type TResponseTaskCreate = Response<{
  message: string;
  data: WithId<TTask> | null;
}>;
export type TResponseTaskDelete = Response<{ message: string }>;
