import { validateResponse } from "../validateResponse.ts";
import {
		TUser,
		TUsersResponseData,
		UserSchema,
		UsersResponseDataSchema,
} from "./types.ts";

export function login({
		username, password,
}: { username: string, password: string }): Promise<TUser> {
		return fetch("/api/login", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						username,
						password,
				}),
		}).then(validateResponse).then(response => response.json())
		.then((user) => UserSchema.parse(user));
}

export function logout(): Promise<void> {
		return fetch("/api/logout", {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(() => undefined);
}

export function getUserMe(): Promise<TUser> {
		return fetch("/api", {
				method: "GET",
		}).then(validateResponse)
		.then((response) => response.json())
		.then((user) => UserSchema.parse(user));
}

export function getAllUsers(page: number): Promise<TUsersResponseData> {
		return fetch(`/api/users/${ page }`, {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(
			usersResponseData => UsersResponseDataSchema.parse(usersResponseData));
}

export function userRegister({
		username, password,
}: { username: string, password: string }): Promise<void> {
		return fetch("/api/signup", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						username,
						password,
				}),
		}).then(validateResponse).then(response => response.json())
		.then(() => undefined);
}

export function updateUser(updateUserData: Partial<TUser>): Promise<TUser> {
		return fetch(`/api/users`, {
				method: "PATCH",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify(updateUserData),
		}).then(validateResponse).then(response => response.json())
		.then((user) => UserSchema.parse(user));
}

export function deleteUser(): Promise<void> {
		return fetch(`/api/users`, {
				method: "DELETE",
		}).then(validateResponse).then(response => response.json())
		.then(() => undefined);
}