import { z } from "zod";
import { MessagesResponseDataSchema } from "../messages/types.ts";

export const ChatSchema = z.object({
		_id: z.string(),
		chatText: z.string(),
		created_at: z.string(),
		updated_at: z.string(),
		userId: z.string(),
});

export type TChat = z.infer<typeof ChatSchema>;

export const ChatsListSchema = z.array(ChatSchema);

export type TChatsList = z.infer<typeof ChatsListSchema>;

export const ResponseResultGetOneChatSchema = z.object({
		chatData: ChatSchema,
		chatMessages: MessagesResponseDataSchema,
});

export type TResponseGetOneChat = z.infer<typeof ResponseResultGetOneChatSchema>;