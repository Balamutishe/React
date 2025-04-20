import { validateResponse } from "../validateResponse.ts";
import { TUser, TUsersList, UserSchema, UsersListSchema } from "./types.ts";

export function login({
		username, password,
}: { username: string, password: string }): Promise<void> {
		return fetch("/api/login", {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify({
						username,
						password,
				}),
		}).then(validateResponse).then(response => response.json()).then(() => undefined);
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
		.then((data) => UserSchema.parse(data));
}

export function getAllUsers(): Promise<TUsersList> {
		return fetch("/api/users", {
				method: "GET",
		}).then(validateResponse).then(response => response.json())
		.then(usersList => UsersListSchema.parse(usersList));
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

export function updateUser(updateUserData: Partial<TUser>): Promise<string> {
		return fetch(`/api/users`, {
				method: "PATCH",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify(updateUserData),
		}).then(validateResponse).then(response => response.json())
		.then(userId => userId);
}

export function deleteUser(): Promise<void> {
		return fetch(`/api/users`, {
				method: "DELETE",
		}).then(validateResponse).then(response => response.json())
		.then(() => undefined);
}