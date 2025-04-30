import { validateResponse } from "../validateResponse.ts";

import { PostSchema, PostsListSchema, TPost, TPostsList } from "./types.ts";

export async function getAllPosts(): Promise<TPostsList> {
		return fetch(`/api/posts`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(postsList => PostsListSchema.parse(postsList));
}

export async function getPost(id: string): Promise<TPost> {
		return fetch(`/api/posts/${ id }`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(post => PostSchema.parse(post));
}

export async function createPost(postText: string): Promise<TPost> {
		return fetch("/api/posts", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						postText,
				}),
		}).then(validateResponse).then((response) => response.json())
		.then(post => PostSchema.parse(post));
}

export async function updatePost({ postText, id }: {
		postText: string,
		id: string
}): Promise<string> {
		return fetch(`/api/posts/${ id }`, {
				method: "PATCH",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						postText,
				}),
		}).then(validateResponse).then(response => response.json())
		.then(postId => postId);
}

export async function fetchDeletePost(id: string): Promise<string> {
		return fetch(`/api/posts/${ id }`, {
				method: "DELETE",
		}).then(validateResponse).then(response => response.json())
		.then(postId => postId);
}