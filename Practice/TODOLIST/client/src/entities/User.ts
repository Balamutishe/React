import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  email: z.string(),
  createdAt: z.date(),
});

export type TUser = z.infer<typeof UserSchema>;
