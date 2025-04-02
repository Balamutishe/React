import { validateResponse } from "../validateResponse.ts";

import {
	TPost,
	PostSchema,
	TPostsList,
	PostsListSchema,
} from './types.ts'

export async function getAllPosts(userId: string): Promise<TPostsList> {
	return fetch(`/api/${ userId }/posts`, {
		method: "GET",
	}).then(validateResponse).then(response => response.json())
		.then(postsList => PostsListSchema.parse(postsList))
}

export async function getPost(id: string): Promise<TPost> {
	return fetch(`/api/posts/${ id }`, {
		method: "GET",
	}).then(validateResponse).then(response => response.json())
		.then(post => PostSchema.parse(post));
}

export async function createPost({
	postText, userId, userImg
}: { postText: string, userId: string, userImg: string }): Promise<string> {
	return fetch("/api/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			postText,
			userId,
			userImg
		}),
	}).then(validateResponse).then((response) => response.json())
		.then((postId) => postId);
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
			postText
		}),
	}).then(validateResponse).then(response => response.json())
		.then(postId => postId);
}

export async function deletePost(id: string): Promise<string> {
	return fetch(`/api/users/${ id }`, {
		method: "DELETE",
	}).then(validateResponse).then(response => response.json())
		.then(postId => postId);
}