import express from "express";
import { taskRouter } from "../routes";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use("/tasks", taskRouter);
