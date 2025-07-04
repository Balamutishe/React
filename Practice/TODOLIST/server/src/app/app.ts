import express from "express";
import { taskRouter, usersRouter } from "../routes";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use("/tasks", taskRouter);
app.use("/users", usersRouter);
