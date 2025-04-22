import { validateResponse } from "../validateResponse.ts";

import { ChatSchema, ChatsListSchema, TChat, TChatsList } from "./types.ts";

export async function getAllChats(): Promise<TChatsList> {
		return fetch(`/api/chats`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(chatsList => ChatsListSchema.parse(chatsList));
}

export async function getChat(id: string): Promise<TChat> {
		return fetch(`/api/chats/${ id }`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(chat => ChatSchema.parse(chat));
}

export async function createChat(chatText: string): Promise<TChat> {
		return fetch("/api/chats", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						chatText,
				}),
		}).then(validateResponse).then((response) => response.json())
		.then(chat => chat);
}

export async function updateChat(chatText: string, id: string): Promise<string> {
		return fetch(`/api/chats/${ id }`, {
				method: "PATCH",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						chatText,
				}),
		}).then(validateResponse).then(response => response.json())
		.then(updateChatId => updateChatId);
}

export async function fetchDeleteChat(id: string): Promise<string> {
		return fetch(`/api/chats/${ id }`, {
				method: "DELETE",
		}).then(validateResponse).then(response => response.json())
		.then(deleteChatId => deleteChatId);
}