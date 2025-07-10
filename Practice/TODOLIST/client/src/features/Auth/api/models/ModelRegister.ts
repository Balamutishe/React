import z from "zod";

export const SchemaFetchDataRegister = z.object({
  login: z
    .string()
    .min(3, "The minimum length of the login is at least three characters")
    .max(
      20,
      "The maximum length of the login is no more than fifty characters"
    ),
  email: z.string().email("Incorrect of email"),
  password: z
    .string()
    .min(6, "The minimum length of the password is at least three characters")
    .max(
      20,
      "The maximum length of the password is no more than fifty characters"
    ),
});

export const SchemaFetchResultRegister = z.object({
  message: z.string(),
});

export type ModelFetchDataRegister = z.infer<typeof SchemaFetchDataRegister>;

export type ModelFetchResultRegister = z.infer<
  typeof SchemaFetchResultRegister
>;
