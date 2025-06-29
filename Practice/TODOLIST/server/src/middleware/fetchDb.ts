import { NextFunction, Request, Response } from "express";
import { IRequestTypes, TTask, TTasksList } from "../types";
import { clientPromise } from "../db/mongoClient";
import { OptionalId } from "mongodb";

export const DbFetch =
  () => async (req: IRequestTypes, res: Response, next: NextFunction) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      req.db = db;
      next();
    } catch (error) {
      next(error);
    }
  };
