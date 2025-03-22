import { z } from 'zod';
import { validateResponse } from './validateResponse';

const UserShema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
});

export type User = z.infer<typeof UserShema>;

export function registerUser({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<void> {
  return fetch('/api/register', {
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

export function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  return fetch('/api/login', {
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

export function logoutUser(): Promise<void> {
  return fetch('/api/logout', {
    method: 'POST',
  }).then(() => undefined);
}

export function fetchUserMe(): Promise<User> {
  return fetch('/api/users/me')
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserShema.parse(data));
}
