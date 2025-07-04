import { Request } from "express";
import { TTaskBody } from "./Task";

export type TRequestWithBody<T> = Request<{}, {}, T>;
export type TRequestWithParams<T> = Request<T>;
export type TRequestWithParamsAndBody<T, O> = Request<T, {}, O>;
export type TRequestWithQuery<T> = Request<{}, {}, {}, T>;

export interface IRequestTypes extends Request {
  params: { id?: string };
  body: TTaskBody;
  query: {
    title?: "string";
    pageNumber?: "string";
    pageSize?: "string";
  };
}
