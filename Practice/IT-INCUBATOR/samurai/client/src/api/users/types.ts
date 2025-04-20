import { z } from 'zod'

export const UserSchema = z.object({
	_id: z.string(),
	username: z.string(),
	userImg: z.string(),
	subscriptions: z.array(z.string()),
})

export type TUser = z.infer<typeof UserSchema>

export const UsersListSchema = z.array(UserSchema)

export type TUsersList = z.infer<typeof UsersListSchema>