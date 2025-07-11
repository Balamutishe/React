import { UserSchema } from "@entities/User";
import z from "zod";

export const SchemaFetchDataLogin = z.object({
  loginOrEmail: z.string().nonempty("Field loginOrEmail can't be empty"),
  password: z.string().nonempty("Field password can't be empty"),
});

export const SchemaFetchResultLogin = z.object({
  message: z.string(),
  data: UserSchema,
});

export type ModelFetchDataLogin = z.infer<typeof SchemaFetchDataLogin>;

export type ModelFetchResultLogin = z.infer<typeof SchemaFetchResultLogin>;
