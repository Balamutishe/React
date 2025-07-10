import { TasksListSchema } from "@entities/Task";
import z from "zod";

export const SchemaFetchResultTasksGetAll = z.object({
  message: z.string(),
  data: z.object({
    tasks: TasksListSchema,
    pagesCountValue: z.number(),
  }),
});

export type ModelFetchResultTasksGetAll = z.infer<
  typeof SchemaFetchResultTasksGetAll
>;
