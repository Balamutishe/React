import { UserSchema } from "@entities/User";
import z from "zod";

export const SchemaFetchDataLogin = z.object({
  loginOrPassword: z.string(),
  password: z.string(),
});

export const SchemaFetchResultLogin = z.object({
  message: z.string(),
  data: UserSchema,
});

export type ModelFetchDataLogin = z.infer<typeof SchemaFetchDataLogin>;

export type ModelFetchResultLogin = z.infer<typeof SchemaFetchResultLogin>;
