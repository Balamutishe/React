import { validateResponse } from "../validateResponse.ts";

import {
		MessageSchema,
		MessagesResponseDataSchema,
		TMessage,
		TMessagesResponseData,
} from "./types.ts";

export async function getAllMessages(chatId: string,
	page: number): Promise<TMessagesResponseData> {
		return fetch(`/api/${ chatId }/messages/${ page }`, {
				method: "GET",
				headers: {
						"Content-Type": "application/json",
				},
		}).then(validateResponse).then(response => response.json())
		.then(messagesData => MessagesResponseDataSchema.parse(messagesData));
}

export async function getMessage(id: string): Promise<TMessage> {
		return fetch(`/api/messages/${ id }`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(message => MessageSchema.parse(message));
}

export async function createMessage(
	messageText: string, chatId: string,
): Promise<TMessage> {
		return fetch("/api/messages", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						messageText,
						chatId,
				}),
		}).then(validateResponse).then((response) => response.json())
		.then((message) => MessageSchema.parse(message));
}

export async function updateMessage({ messageText, id }: {
		messageText: string,
		id: string
}): Promise<string> {
		return fetch(`/api/messages/${ id }`, {
				method: "PATCH",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						messageText,
				}),
		}).then(validateResponse).then(response => response.json())
		.then(updateMessageId => updateMessageId);
}

export async function fetchDeleteMessage(messageId: string,
	chatId: string): Promise<string> {
		return fetch(`/api/${ chatId }/messages/${ messageId }`, {
				method: "DELETE",
		}).then(validateResponse).then(response => response.json())
		.then(deleteMessageId => deleteMessageId);
}