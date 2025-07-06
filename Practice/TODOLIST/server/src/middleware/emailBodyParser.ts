import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { HTTP_STATUSES } from "../utils";

const SendEmailBodySchema = z.object({
  email: z.string().email(),
  message: z.string(),
  subject: z.string(),
});

export const sendEmailBodyParser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyResult = SendEmailBodySchema.safeParse(req.body);

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
