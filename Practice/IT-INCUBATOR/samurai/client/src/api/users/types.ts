import { z } from "zod";

export const UserSchema = z.object({
		_id: z.string(),
		username: z.string(),
		userImg: z.string(),
		subscriptions: z.array(z.string()),
		posts_ids: z.array(z.string()),
		chats_ids: z.array(z.string()),
		status: z.string(),
});

export type TUser = z.infer<typeof UserSchema>

export const UsersListSchema = z.array(UserSchema);

export type TUsersList = z.infer<typeof UsersListSchema>

export const UsersResponseDataSchema = z.object(
	{ usersList: UsersListSchema, pageCount: z.number() });

export type TUsersResponseData = z.infer<typeof UsersResponseDataSchema>;