import { z } from 'zod';
import { validateResponse } from './validateResponse';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const RegisterUserSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;

export function registerUser({
  username,
  email,
  password,
}: RegisterUser): Promise<void> {
  return fetch(`/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  return fetch(`/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function logout(): Promise<void> {
  return fetch(`http://localhost:5173/api/logout`)
    .then(validateResponse)
    .then(() => undefined);
}

export function fetchUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
}

export function fetchMe(): Promise<User> {
  return fetch(`/api/users/me`)
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
}
