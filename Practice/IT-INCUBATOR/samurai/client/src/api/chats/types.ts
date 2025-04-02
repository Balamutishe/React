import { z } from "zod";

export const ChatSchema = z.object({
	_id: z.string(),
	chatText: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	userId: z.string(),
})

export type TChat = z.infer<typeof ChatSchema>;

export const ChatsListSchema = z.array(ChatSchema)

export type TChatsList = z.infer<typeof ChatsListSchema>;