import { UserSchema, type TUser } from "@entities/types/User";
import { validateResponse } from "@shared/utils/validateResponse";

export const fetchUserMe = (): Promise<TUser> => {
  return fetch("/api/users/me", { method: "GET" })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
};

export const fetchUserChange = (userData: Partial<TUser>): Promise<TUser> => {
  return fetch(`/api/users/${userData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userData,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
};

export const fetchUserDelete = (id: string): Promise<string> => {
  return fetch(`/api/users/${id}`, { method: "DELETE" })
    .then(validateResponse)
    .then((response) => response.json());
};

export const fetchUserLogin = (userDataLogin: {
  username: string;
  password: string;
}): Promise<TUser> => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userDataLogin,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
};

export const fetchUserLogout = (): Promise<string> => {
  return fetch("/api/users/logout", { method: "DELETE" })
    .then(validateResponse)
    .then((response) => response.json());
};

export const fetchUserRegister = (userDataRegister: {
  name: string;
  surname: string;
  email: string;
  password: string;
}): Promise<TUser> => {
  return fetch("/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userDataRegister,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
};
