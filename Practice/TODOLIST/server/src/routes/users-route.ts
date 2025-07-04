import { Router, Request, Response } from "express";
import { usersService } from "../domain";
import { DbFetch } from "../middleware";

export const usersRouter = Router();

usersRouter.use(DbFetch("users"));

usersRouter.post("/", async (req: Request, res: Response) => {
  const newUser = await usersService.createUser(
    req.collection,
    req.body.login,
    req.body.email,
    req.body.password
  );

  res.status(201).send(newUser);
});
