import { validateResponse } from "../validateResponse.ts";

import {
		ChatSchema,
		ChatsListSchema,
		ResponseResultGetOneChatSchema,
		TChat,
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

export async function createChat({ formText }: {
		formText: string
}): Promise<TChat> {
		return fetch("/api/chats", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						formText,
				}),
		}).then(validateResponse).then((response) => response.json())
		.then((newChatData: string) => ChatSchema.parse(newChatData));
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