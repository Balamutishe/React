import { validateResponse } from "../validateResponse.ts";

import {
	TMessage,
	MessageSchema,
	TMessagesList,
	MessagesListSchema,
} from './types.ts'

export async function getAllMessages(chatId: string): Promise<TMessagesList> {
	return fetch(`/api/${ chatId }/messages`, {
		method: "GET"
	}).then(validateResponse).then(response => response.json())
		.then(messagesList => MessagesListSchema.parse(messagesList))
}

export async function getMessage(id: string): Promise<TMessage> {
	return fetch(`/api/messages/${ id }`, {
		method: "GET",
	}).then(validateResponse).then(response => response.json())
		.then(message => MessageSchema.parse(message));
}

export async function createMessage(
	messageText: string, userImg: string, chatId: string, userId: string
): Promise<TMessage> {
	return fetch("/api/messages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			messageText,
			userImg,
			chatId,
			userId
		}),
	}).then(validateResponse).then((response) => response.json())
		.then(message => message);
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
			messageText
		}),
	}).then(validateResponse).then(response => response.json())
		.then(updateMessageId => updateMessageId);
}

export async function fetchDeleteMessage(id: string): Promise<string> {
	return fetch(`/api/messages/${ id }`, {
		method: "DELETE",
	}).then(validateResponse).then(response => response.json())
		.then(deleteMessageId => deleteMessageId);
}