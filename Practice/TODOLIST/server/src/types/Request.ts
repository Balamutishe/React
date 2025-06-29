import { Request } from "express";
import { TDbTasks, TTask, TTaskBody, TTasksList } from "./Task";
import { Collection, Db, OptionalId } from "mongodb";

export type TRequestWithBody<T> = Request<{}, {}, T>;
export type TRequestWithParams<T> = Request<T>;
export type TRequestWithParamsAndBody<T, O> = Request<T, {}, O>;
export type TRequestWithQuery<T> = Request<{}, {}, {}, T>;

export interface IRequestTypes extends Request {
  db?: Db;
  params: { id?: string };
  body: TTaskBody;
  query: { title: "string" };
}
