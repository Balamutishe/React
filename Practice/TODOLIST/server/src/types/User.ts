import { z } from "zod";

export const UserSchema = z.object({
  userName: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  passwordSalt: z.string(),
  createdAt: z.date(),
});
const UsersListSchema = z.array(UserSchema);

export type TUser = z.infer<typeof UserSchema>;
export type TUsersList = z.infer<typeof UsersListSchema>;
