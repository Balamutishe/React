import { z } from "zod";

export const TaskSchema = z.object({
  _id: z.string(),
  title: z.string(),
  status: z.string(),
  description: z.string(),
  priority: z.string(),
  due_date: z.date(),
});

export type TTask = z.infer<typeof TaskSchema>;

export const TasksListSchema = z.array(TaskSchema);

export type TTasksList = z.infer<typeof TasksListSchema>;
