import { z } from "zod";

export const SchemaFetchResultTaskDelete = z.object({
  message: z.string(),
});

export const SchemaFetchDataTaskDelete = z.string();

export type ModelFetchResultTaskDelete = z.infer<
  typeof SchemaFetchResultTaskDelete
>;

export type ModelFetchDataTaskDelete = z.infer<
  typeof SchemaFetchDataTaskDelete
>;
