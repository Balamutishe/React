import { validateResponse } from "../validateResponse.ts";

import {
	TChat,
	ChatSchema,
	TChatsList,
	ChatsListSchema,
} from './types.ts'

export async function getAllChats(userId: string): Promise<TChatsList> {
	return fetch(`/api/${ userId }/chats`, {
		method: "GET"
	}).then(validateResponse).then(response => response.json())
		.then(chatsList => ChatsListSchema.parse(chatsList))
}

export async function getChat(id: string): Promise<TChat> {
	return fetch(`/api/chats/${ id }`, {
		method: "GET",
	}).then(validateResponse).then(response => response.json())
		.then(chat => ChatSchema.parse(chat));
}

export async function createChat(chatText: string,
	userId: string): Promise<string> {
	return fetch("/api/chats", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatText,
			userId
		}),
	}).then(validateResponse).then((response) => response.json())
		.then(newChatId => newChatId);
}

export async function updateChat({ chatText, id }: {
	chatText: string,
	id: string
}): Promise<string> {
	return fetch(`/api/chats/${ id }`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatText
		}),
	}).then(validateResponse).then(response => response.json())
		.then(updateChatId => updateChatId);
}

export async function deleteChat(id: string): Promise<string> {
	return fetch(`/api/chats/${ id }`, {
		method: "DELETE",
	}).then(validateResponse).then(response => response.json())
		.then(deleteChatId => deleteChatId);
}