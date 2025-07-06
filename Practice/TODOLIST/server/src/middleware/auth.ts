import { Request, Response, NextFunction } from "express";
import { jwtService } from "../app/jwt-service";
import { usersService } from "../domain";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers["authorization"];
  const refreshToken = req.cookies["refreshToken"];

  if (!accessToken && !refreshToken) {
    res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const userId = await jwtService.userIdGetByToken(accessToken!);

    const user = await usersService.userFindById(userId);
    //@ts-ignore
    req.user = user;
    next();
  } catch (error) {
    if (!refreshToken) {
      res.status(401).send("Access Denied. No refresh token provided.");
    }

    try {
      const { newAccessToken, newRefreshToken } = await jwtService.refreshJWT(
        refreshToken
      );

      if (!newAccessToken && !newRefreshToken) {
        res.status(401).send("Access Denied. No token provided.");
      } else {
        if (newAccessToken) {
          res
            .cookie("refreshToken", newRefreshToken, {
              httpOnly: true,
              sameSite: "strict",
            })
            .header("Authorization", newAccessToken)
            .send({ message: "New token successfully created" });

          next();
        }
      }
    } catch (error) {
      next(error);
    }
  }
};
