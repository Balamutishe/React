import { z } from "zod";
import { validateResponse } from "./validateResponse";

export const UserShema = z.object({
  id: z.number(),
  username: z.string(),
});

export type TUser = z.infer<typeof UserShema>;

export function fetchUser(): Promise<TUser> {
  return fetch("/api", {
    method: "GET",
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserShema.parse(data));
}

export function loginUser(username: string, password: string): Promise<void> {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function logoutUser(): Promise<void> {
  return fetch("/api/logout", {
    method: "POST",
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function registerUser(
  username: string,
  password: string
): Promise<void> {
  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}
