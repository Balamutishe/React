import { Request, Response, Router } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";
import { auth, registerUserBodyParser } from "../middleware";

export const authRouter = Router();

authRouter.post("/login", auth, async (req: Request, res: Response) => {
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
        const newUser = await usersService.userFindById(
          userCreatedResult.insertedId
        );

        res
          .status(HTTP_STATUSES.CREATED_201)
          .send({ data: newUser, message: "User created" });
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
