import { Request, Response, Router } from "express";
import { usersService } from "../domain";
import { HTTP_STATUSES } from "../utils";
import { jwtService } from "../app/jwt-service";
import { sendEmailBodyParser } from "../middleware";
import nodemailer from "nodemailer";

export const emailRouter = Router();

emailRouter.post(
  "/send",
  sendEmailBodyParser,
  async (req: Request, res: Response) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const info = await transporter.sendMail({
      from: "Balamut",
      to: req.body.email,
      subject: req.body.subject,
      html: req.body.message,
    });

    console.log(info);

    res.send({
      email: req.body.email,
      message: req.body.message,
      subject: req.body.subject,
    });
  }
);
