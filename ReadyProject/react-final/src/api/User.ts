import { z } from 'zod';
import { validateResponse } from './validateResponse';

const URL = `https://cinemaguide.skillbox.cc`;

const UserShema = z.object({
  favorites: z.array(z.string()),
  surname: z.string(),
  name: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof UserShema>;

export function fetchUser(): Promise<User> {
  return fetch(`${URL}/profile`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserShema.parse(data));
}

export function registerUser(
  email: string,
  password: string,
  name: string,
  surname: string
): Promise<void> {
  return fetch(`${URL}/user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      name,
      surname,
    }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function loginUser(email: string, password: string): Promise<void> {
  return fetch(`${URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
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

export function logoutUser(): Promise<void> {
  return fetch(`${URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(validateResponse)
    .then(() => undefined);
}
