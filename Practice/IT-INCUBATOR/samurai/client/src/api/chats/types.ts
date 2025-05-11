import { z } from "zod";
import {
		MessagesListSchema,
		MessagesResponseDataSchema,
} from "../messages/types.ts";

export const ChatSchema = z.object({
		_id: z.string(),
		chatText: z.string(),
		created_at: z.string(),
		updated_at: z.string(),
		userId: z.string(),
		messages_ids: z.array(z.string()),
		messagesList: MessagesListSchema || z.array(z.string()),
		messagesPageCount: z.number(),
});

export type TChat = z.infer<typeof ChatSchema>;

export const ChatsListSchema = z.array(ChatSchema);

export type TChatsList = z.infer<typeof ChatsListSchema>;

export const ResponseResultGetOneChatSchema = z.object({
		chat: ChatSchema,
		chatMessages: MessagesResponseDataSchema,
});

export type TResponseGetOneChat = z.infer<typeof ResponseResultGetOneChatSchema>;