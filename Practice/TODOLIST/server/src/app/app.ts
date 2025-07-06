import express from "express";
import { taskRouter, usersRouter, authRouter, emailRouter } from "../routes";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use("/", authRouter);
app.use("/tasks", taskRouter);
app.use("/users", usersRouter);
app.use("/email", emailRouter);
