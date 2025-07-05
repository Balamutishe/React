import { Request, Response, NextFunction } from "express";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";
import { usersService } from "../domain";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.send(HTTP_STATUSES.NOT_AUTHORIZED_401);
    return;
  }

  const token = req.headers.authorization.split(" ")[1]; // "bearer askjfnsdnfksndfksndjgnskd"

  const userId = await jwtService.userIdGetByToken(token);
  if (userId) {
    // @ts-ignore
    req.user = await usersService.userFindById(userId);
    next();
  }

  res.send(HTTP_STATUSES.NOT_AUTHORIZED_401);
};
