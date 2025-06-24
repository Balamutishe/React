import { UserSchema, type TUser } from "@entities/types/User";
import { validateResponse } from "@shared/utils/validateResponse";

export const fetchUserMe = (): Promise<TUser> => {
  return fetch("/api/me", { method: "GET" })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
};

export const fetchUserChange = (userData: Partial<TUser>): Promise<void> => {
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
    .then(() => undefined);
};

export const fetchUserDelete = (id: Pick<TUser, "id">): Promise<void> => {
  return fetch(`/api/users/${id}`, { method: "DELETE" })
    .then(validateResponse)
    .then((response) => response.json())
    .then(() => undefined);
};

export const fetchUserLogin = (userData: Omit<TUser, "id">): Promise<void> => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userData,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json)
    .then(() => undefined);
};

export const fetchUserRegister = (registerData: {
  email: string;
  password: string;
}): Promise<TUser> => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      registerData,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json)
    .then((data) => UserSchema.parse(data));
};
