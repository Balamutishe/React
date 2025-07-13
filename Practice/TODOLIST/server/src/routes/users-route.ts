import { Router, Request, Response } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { pick } from "lodash";
import { auth } from "../middleware";

export const usersRouter = Router();

usersRouter.get("/me", auth, async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const user = pick(req.user, ["_id", "userName", "email", "createdAt"]);

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Successful authorization", data: user });
    return;
  } catch (err) {
    res.status(HTTP_STATUSES.NOT_AUTHORIZED_401).send({ message: err });
    return;
  }
});

usersRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const { pageSize, pageNumber } = req.query;

    const { limitValue, skipValue, pagesCountValue } =
      await usersService.queryPagesDataTransform(
        Number(pageSize),
        Number(pageNumber)
      );

    const users = await usersService.usersFindAll(limitValue, skipValue);

    res
      .status(HTTP_STATUSES.OK_200)
      .json({ message: "Successful", data: users });
  } catch (err) {
    res.status(HTTP_STATUSES.BAD_REQUEST_400).send({ message: err });
  }
});
