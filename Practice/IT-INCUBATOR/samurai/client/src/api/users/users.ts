import { validateResponse } from "../validateResponse.ts";
import {
	TUser,
	UserSchema,
	TUsersList,
	UsersListSchema
} from './types.ts'

export async function getAllUsers(): Promise<TUsersList> {
	return fetch("/api/users", {
		method: "GET"
	}).then(validateResponse).then(response => response.json())
		.then(usersList => UsersListSchema.parse(usersList))
}

export async function getUserById(id: string): Promise<TUser> {
	return fetch(`/api/users/${ id }`, {
		method: "GET",
	}).then(validateResponse).then(response => response.json())
		.then(user => UserSchema.parse(user))
}

export async function createUser({
	username, password, userImg
}: TUser): Promise<string> {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
			userImg
		}),
	}).then(validateResponse).then(response => response.json())
		.then(userId => userId);
}

export async function updateUser(id: string,
	updateUserData: Partial<TUser>): Promise<string> {
	return fetch(`/api/users/${ id }`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateUserData),
	}).then(validateResponse).then(response => response.json())
		.then(userId => userId);
}

export async function deleteUser(id: string): Promise<string> {
	return fetch(`/api/users/${ id }`, {
		method: "DELETE",
	}).then(validateResponse).then(response => response.json())
		.then(userId => userId);
}