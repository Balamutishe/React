import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export type TTask = z.infer<typeof TaskSchema>;

export const TasksListSchema = z.array(TaskSchema);

export type TTasksList = z.infer<typeof TasksListSchema>;
