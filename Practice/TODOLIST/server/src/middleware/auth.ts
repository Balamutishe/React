import { Request, Response, NextFunction } from "express";
import { jwtService } from "../app/jwt-service";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { pick } from "lodash";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers["authorization"];
  const refreshToken = req.cookies["refreshToken"];

  console.log({ access: `${accessToken}`, refresh: `${refreshToken}` });

  if (!accessToken && !refreshToken) {
    res
      .status(HTTP_STATUSES.NOT_AUTHORIZED_401)
      .send({ message: "Unauthorized. No token provided." });
    return;
  }

  try {
    if (!accessToken) {
      throw new Error("accessToken not found");
    }

    const userData = await jwtService.userIdGetByToken(accessToken);
    const user = pick(userData, ["_id", "userName", "email", "createdAt"]);

    //@ts-ignore
    req.user = user;
    next();
  } catch (error) {
    if (!refreshToken) {
      res
        .status(HTTP_STATUSES.NOT_AUTHORIZED_401)
        .send({ message: "Unauthorized. No refresh token provided." });
      return;
    }

    try {
      const { newAccessToken, newRefreshToken } = await jwtService.refreshJWT(
        refreshToken
      );

      if (!newAccessToken || !newRefreshToken) {
        res
          .status(HTTP_STATUSES.NOT_AUTHORIZED_401)
          .send({ message: "Unauthorized. No NewToken provided." });
        return;
      } else {
        const userData = await jwtService.userIdGetByToken(newAccessToken);
        const user = pick(userData, ["_id", "userName", "email", "createdAt"]);

        //@ts-ignore
        req.user = user;
        //@ts-ignore
        req.accessToken = newAccessToken;
        //@ts-ignore
        req.refreshToken = newRefreshToken;

        console.log({
          newAccess: `${newAccessToken}`,
          newRefresh: `${newRefreshToken}`,
        });

        next();
      }
    } catch (error) {
      next(error);
    }
  }
};
