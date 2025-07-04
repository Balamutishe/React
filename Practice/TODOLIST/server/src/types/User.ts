import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  email: z.string().email(),
  password: z.string(),
});
const UsersListSchema = z.array(UserSchema);

export type TUser = z.infer<typeof UserSchema>;
export type TUsersList = z.infer<typeof UsersListSchema>;
