import { NextFunction, Request, Response } from "express";
import { IRequestTypes, TTask, TTasksList } from "../types";
import { clientPromise } from "../db/mongoClient";

export const DbFetch =
  (collectionName: string) =>
  async (req: IRequestTypes, res: Response, next: NextFunction) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      req.collection = db.collection(collectionName);
      next();
    } catch (error) {
      next(error);
    }
  };
