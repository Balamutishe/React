import { validateResponse } from "../validateResponse.ts";

import {
		ChatsListSchema,
		ResponseResultGetOneChatSchema,
		TChatsList,
		TResponseGetOneChat,
} from "./types.ts";

export async function getAllChats(): Promise<TChatsList> {
		return fetch(`/api/chats`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(chatsList => ChatsListSchema.parse(chatsList));
}

export async function getOneChat(id: string,
	page: string): Promise<TResponseGetOneChat> {
		return fetch(`/api/chats/${ id }/${ page }`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(chatData => ResponseResultGetOneChatSchema.parse(chatData));
}

export async function createChat(chatText: string): Promise<string> {
		return fetch("/api/chats", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						chatText,
				}),
		}).then(validateResponse).then((response) => response.json())
		.then((createChatId: string) => createChatId);
}

export async function updateChat(chatText: string,
	id: string): Promise<string> {
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