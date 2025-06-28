import { Request } from "express";

export type TRequestWithBody<T> = Request<{}, {}, T>;
export type TRequestWithParams<T> = Request<T>;
export type TRequestWithParamsAndBody<T, O> = Request<T, {}, O>;
export type TRequestWithQuery<T> = Request<{}, {}, {}, T>;
