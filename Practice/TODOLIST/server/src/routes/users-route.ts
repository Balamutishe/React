import { Router, Request, Response } from "express";
import { usersService } from "../domain";

export const usersRouter = Router();

usersRouter.post("/", async (req: Request, res: Response) => {
  const newUser = await usersService.createUser(
    req.body.login,
    req.body.email,
    req.body.password
  );

  res.status(201).send(newUser);
});
