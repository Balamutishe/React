import { Collection } from "mongodb";
import { z } from "zod";

export const TaskSchema = z.object({
  _id: z.string().uuid(),
  title: z.string(),
  status: z.string(),
  description: z.string(),
  priority: z.string(),
  due_date: z.string(),
});
export const TasksListSchema = z.array(TaskSchema);
export const TaskBodySchema = TaskSchema.omit({ _id: true })
  .partial()
  .required({
    title: true,
  });
export const TaskParamsSchema = TaskSchema.pick({ _id: true });
export const TaskQuerySchema = TaskSchema.pick({ title: true });

export type TTask = z.infer<typeof TaskSchema>;
export type TTasksList = z.infer<typeof TasksListSchema>;
export type TTaskBody = z.infer<typeof TaskBodySchema>;
export type TTaskParams = z.infer<typeof TaskParamsSchema>;
export type TTaskQuery = z.infer<typeof TaskQuerySchema>;

export type TDbTasks = Collection<TTasksList>;
