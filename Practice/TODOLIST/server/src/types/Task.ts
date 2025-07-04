import { Collection, ObjectId } from "mongodb";
import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  status: z.string(),
  description: z.string(),
  priority: z.string(),
  due_date: z.string(),
});
export const TasksListSchema = z.array(TaskSchema);
export const TaskBodySchema = TaskSchema.omit({ id: true }).partial().required({
  title: true,
});

export type TTask = z.infer<typeof TaskSchema>;
export type TTasksList = z.infer<typeof TasksListSchema>;
export type TTaskBody = z.infer<typeof TaskBodySchema>;

export type TCollectionTasks = Collection<TTasksList>;
