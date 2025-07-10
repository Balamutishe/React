import { TaskSchema } from "@entities/Task";
import { z } from "zod";

export const SchemaFetchResultTaskCreate = z.object({
  message: z.string(),
  data: TaskSchema || z.null(),
});

export const SchemaFetchDataTaskCreate = TaskSchema.omit({ _id: true })
  .partial()
  .required({ title: true });

export type ModelFetchDataTaskCreate = z.infer<
  typeof SchemaFetchDataTaskCreate
>;

export type ModelFetchResultTaskCreate = z.infer<
  typeof SchemaFetchResultTaskCreate
>;
