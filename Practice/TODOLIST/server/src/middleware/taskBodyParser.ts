import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { HTTP_STATUSES } from "../utils";

const TaskBodySchema = z.object({
  title: z
    .string()
    .min(3, "The minimum length of the title is at least three characters")
    .max(
      50,
      "The maximum length of the title is no more than fifty characters"
    ),
  status: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  due_date: z.string().optional(),
});

export const taskBodyParser =
  () => (req: Request, res: Response, next: NextFunction) => {
    const bodyResult = TaskBodySchema.safeParse(req.body);

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
