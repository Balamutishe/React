import { Response } from "express";
import { TTask, TTasksList } from "./Task";

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
