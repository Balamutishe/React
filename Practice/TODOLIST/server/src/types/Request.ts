import { Request } from "express";
import { TTaskBody, TTasksList } from "./Task";
import { Collection } from "mongodb";

export type TRequestWithBody<T> = Request<{}, {}, T>;
export type TRequestWithParams<T> = Request<T>;
export type TRequestWithParamsAndBody<T, O> = Request<T, {}, O>;
export type TRequestWithQuery<T> = Request<{}, {}, {}, T>;

export interface IRequestTypes extends Request {
  collection?: Collection<TTasksList>;
  params: { id?: string };
  body: TTaskBody;
  query: { title: "string" };
}
