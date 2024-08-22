import { z } from 'zod';
import { validateResponse } from './validateResponse';

const UserShema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof UserShema>;

export function registerUser(
  username: string,
  email: string,
  password: string
): Promise<void> {
  return fetch('/register', {
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

export function loginUser(email: string, password: string): Promise<void> {
  return fetch('/login', {
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

export function fetchUserMe(): Promise<User> {
  return fetch('/users/me')
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserShema.parse(data));
}
