import { Router, Request, Response } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";

export const usersRouter = Router();

usersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { pageSize, pageNumber } = req.query;

    const { limitValue, skipValue, pagesCountValue } =
      await usersService.queryPagesDataTransform(
        Number(pageSize),
        Number(pageNumber)
      );

    const users = await usersService.usersFindAll(limitValue, skipValue);

    res.status(HTTP_STATUSES.OK_200).json(users);
  } catch (err) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
  }
});

usersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { login, email, password } = req.body;

    const newUser = await usersService.createUser(login, email, password);

    res.status(HTTP_STATUSES.CREATED_201).send(newUser);
  } catch (err) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
  }
});
