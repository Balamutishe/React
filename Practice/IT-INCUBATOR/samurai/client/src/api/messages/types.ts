import { z } from "zod";

export const MessageSchema = z.object({
  _id: z.string(),
  messageText: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  userImg: z.string(),
  userId: z.string(),
  chatId: z.string(),
});

export type TMessage = z.infer<typeof MessageSchema>;

export const MessagesListSchema = z.array(MessageSchema);

export type TMessagesList = z.infer<typeof MessagesListSchema>;

export const MessagesResponseDataSchema = z.object({
  messagesList: MessagesListSchema,
  pageCount: z.number(),
});

export type TMessagesResponseData = z.infer<typeof MessagesResponseDataSchema>;
