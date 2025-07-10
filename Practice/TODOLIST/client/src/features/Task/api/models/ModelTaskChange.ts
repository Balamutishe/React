import { TaskSchema, TasksListSchema } from "@entities/Task";
import z from "zod";

export const SchemaFetchResultTaskChange = z.object({
  message: z.string(),
  data: TasksListSchema,
});

export const SchemaFetchDataTaskChange = TaskSchema.partial().required({
  _id: true,
});

export type ModelFetchResultTaskChange = z.infer<
  typeof SchemaFetchResultTaskChange
>;

export type ModelFetchDataTaskChange = z.infer<
  typeof SchemaFetchDataTaskChange
>;
