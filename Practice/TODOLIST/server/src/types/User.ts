import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type TUser = z.infer<typeof UserSchema>;
