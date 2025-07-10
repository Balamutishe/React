import { Response } from "express";
import { TTaskDB } from "../repository/task-repository/task-repository-types";

export type TResponseTasksGetAll = Response<{
  message: string;
  data: { tasks: TTaskDB[]; pagesCountValue: number };
}>;
export type TResponseTaskGetOne = Response<{
  message: string;
  data?: TTaskDB[] | undefined;
}>;
export type TResponseTaskPatch = Response<{
  message: string;
  data?: TTaskDB[];
}>;
export type TResponseTaskCreate = Response<{
  message: string;
  data: TTaskDB | null;
}>;
export type TResponseTaskDelete = Response<{ message: string }>;
