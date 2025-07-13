import { Request, Response, Router } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";
import { auth, registerUserBodyParser } from "../middleware";
import { pick } from "lodash";

export const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const user = await usersService.checkCredentials(
      req.body.loginOrEmail,
      req.body.password
    );

    if (!user) throw new Error("Incorrect login or password");
    const userData = pick(user, ["_id", "userName", "email", "createdAt"]);

    const { refreshToken, accessToken } = await jwtService.createJWT(user);
    if (!refreshToken || !accessToken) throw new Error("Failed creation token");

    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
      })
      .header("Authorization", accessToken)
      .json({ message: "Successful login", user: userData });
  } catch (error) {
    res.status(HTTP_STATUSES.BAD_REQUEST_400).send({ message: error });
  }
});

authRouter.post("/logout", auth, async (req, res) => {
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logout successful" });
});

authRouter.get("/refresh", auth, async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    if (!req.accessToken) throw new Error("No refresh token provided");

    res
      //@ts-ignore
      .header("Authorization", req.accessToken)
      //@ts-ignore
      .send({ message: "Successful refresh", user: req.user });
  } catch (error) {
    res.status(HTTP_STATUSES.BAD_REQUEST_400).send({ message: error });
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

      if (!userCreatedResult.acknowledged)
        throw new Error("The user has not been registered");

      res
        .status(HTTP_STATUSES.CREATED_201)
        .send({ message: "Successful registration" });
    } catch (error) {
      res.status(HTTP_STATUSES.BAD_REQUEST_400).send({
        message: error,
      });
    }
  }
);
