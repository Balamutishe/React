import { Response } from "express";
import { TTask, TTasksList } from "./Task";
import { WithId } from "mongodb";
import { TTaskDB } from "../repository/task-repository/task-repository-types";

export type TResponseTasksGetAll = Response<{
  message: string;
  data: { tasks: WithId<TTaskDB>[]; pagesCountValue: number };
}>;
export type TResponseTaskGetOne = Response<{
  message: string;
  data?: WithId<TTaskDB>[] | undefined;
}>;
export type TResponseTaskPatch = Response<{
  message: string;
  data?: TTaskDB[];
}>;
export type TResponseTaskCreate = Response<{
  message: string;
  data: WithId<TTaskDB> | null;
}>;
export type TResponseTaskDelete = Response<{ message: string }>;
