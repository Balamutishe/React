import { TaskSchema } from "@entities/Task";
import z from "zod";

export const SchemaFetchResultTaskGetOne = z.object({
  message: z.string(),
  data: TaskSchema,
});

export type ModelFetchResultTaskGetOne = z.infer<
  typeof SchemaFetchResultTaskGetOne
>;
