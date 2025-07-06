import express from "express";
import cookieParser from "cookie-parser";
import { taskRouter, usersRouter, authRouter, emailRouter } from "../routes";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use(cookieParser());
app.use("/", authRouter);
app.use("/tasks", taskRouter);
app.use("/users", usersRouter);
app.use("/email", emailRouter);
