import { Request, Response, Router } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";

export const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const user = await usersService.checkCredentials(
    req.body.loginOrEmail,
    req.body.password
  );

  if (user) {
    const token = await jwtService.createJWT(user);
    res.status(HTTP_STATUSES.OK_200).send(token);
  } else {
    res.status(HTTP_STATUSES.NOT_AUTHORIZED_401);
  }
});
