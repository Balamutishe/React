import { z } from "zod";

export const MessageSchema = z.object({
	_id: z.string(),
	chatText: z.string(),
	created_at: z.date(),
	updated_at: z.date(),
	userId: z.string(),
})

export type TMessage = z.infer<typeof MessageSchema>;

export const MessagesListSchema = z.array(MessageSchema)

export type TMessagesList = z.infer<typeof MessagesListSchema>;