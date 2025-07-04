import { NextFunction, Request, Response } from "express";
import { IRequestTypes, TTask, TTasksList } from "../types";
import { clientPromise } from "../db/mongoClient";

export const DbFetch =
  () => async (req: IRequestTypes, res: Response, next: NextFunction) => {
    try {
      const client = await clientPromise;
      await client.db().command({ ping: 1 });
      console.log("Connected successfully to mongo server");
    } catch (error) {
      await client.close();
    }
  };
