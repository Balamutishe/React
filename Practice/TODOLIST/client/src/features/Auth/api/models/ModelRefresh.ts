import { UserSchema } from "@entities/User";
import z from "zod";

export const SchemaFetchResultRefresh = z.object({
  token: z.string(),
  data: z.object({
    message: z.string(),
    user: UserSchema,
  }),
});

export type ModelFetchResultRefresh = z.infer<typeof SchemaFetchResultRefresh>;
