import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { HTTP_STATUSES } from "../utils";

const RegisterUserBodySchema = z.object({
  login: z
    .string()
    .min(3, "The minimum length of the login is at least three characters")
    .max(
      20,
      "The maximum length of the login is no more than fifty characters"
    ),
  email: z.string().email("Incorrect of email"),
  password: z
    .string()
    .min(6, "The minimum length of the password is at least three characters")
    .max(
      20,
      "The maximum length of the password is no more than fifty characters"
    ),
});

export const registerUserBodyParser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyResult = RegisterUserBodySchema.safeParse(req.body);

  if (bodyResult.success) {
    next();
  } else {
    const errors = bodyResult.error.errors.map((err) => {
      return {
        errorField: err.path.toString(),
        message: err.message,
      };
    });

    res.status(HTTP_STATUSES.BAD_REQUEST_400).send(errors);
  }
};
