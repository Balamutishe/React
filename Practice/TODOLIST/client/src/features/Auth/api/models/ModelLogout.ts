import z from "zod";

export const SchemaFetchResultLogout = z.object({
  message: z.string(),
});

export type ModelFetchResultLogout = z.infer<typeof SchemaFetchResultLogout>;
