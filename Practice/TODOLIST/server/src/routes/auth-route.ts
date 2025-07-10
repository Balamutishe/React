import { Request, Response, Router } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";
import { auth, registerUserBodyParser } from "../middleware";
import { pick } from "lodash";

export const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const user = await usersService.checkCredentials(
    req.body.loginOrEmail,
    req.body.password
  );

  if (user) {
    const userData = pick(user, ["_id", "userName", "email", "createdAt"]);

    const { refreshToken, accessToken } = await jwtService.createJWT(user);
    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
      })
      .header("Authorization", accessToken)
      .json({ message: "Successful login", data: userData });
  } else {
    res.status(HTTP_STATUSES.NOT_AUTHORIZED_401);
  }
});

authRouter.post("/logout", auth, async (req, res) => {
  res.clearCookie("refreshToken");
  res.status(201).json("Logout successful");
});

authRouter.post("/refresh", async (req: Request, res: Response) => {
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken) {
    res.status(401).send("Access Denied. No refresh token provided.");
    return;
  }

  try {
    const { newAccessToken } = await jwtService.refreshJWT(refreshToken);

    if (newAccessToken) {
      res
        .header("Authorization", newAccessToken)
        //@ts-ignore
        .send(req.user);
    } else {
      res.status(400).send("Invalid access token.");
    }
  } catch (error) {
    res.status(400).send("Invalid refresh token.");
  }
});

authRouter.post(
  "/register",
  registerUserBodyParser,
  async (req: Request, res: Response) => {
    try {
      const { login, email, password } = req.body;

      const userCreatedResult = await usersService.createUser(
        login,
        email,
        password
      );

      if (userCreatedResult.acknowledged) {
        res
          .status(HTTP_STATUSES.CREATED_201)
          .send({ message: "Successful registration" });
      } else {
        throw new Error("User not created");
      }
    } catch (error: any) {
      if (error.message === "User not created") {
        res.send(HTTP_STATUSES.BAD_REQUEST_400).send({
          message: error.message,
        });
      }
    }
  }
);
