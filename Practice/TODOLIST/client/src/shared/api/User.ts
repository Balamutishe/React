import { UserSchema, type TUser } from "@entities/types/User";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchUserMe = (): Promise<TUser> => {
  return fetchConfig("/api/users/me", "GET").then((data) =>
    UserSchema.parse(data)
  );
};

export const fetchUserChange = (userData: Partial<TUser>): Promise<TUser> => {
  return fetchConfig(`/api/users/${userData.id}`, "PATCH", userData).then(
    (data) => UserSchema.parse(data)
  );
};

export const fetchUserDelete = (id: string): Promise<string> => {
  return fetchConfig(`/api/users/${id}`, "DELETE");
};

export const fetchUserLogin = (userDataLogin: {
  username: string;
  password: string;
}): Promise<TUser> => {
  return fetchConfig("/api/users", "POST", userDataLogin).then((data) =>
    UserSchema.parse(data)
  );
};

export const fetchUserLogout = (): Promise<string> => {
  return fetchConfig("/api/users", "DELETE");
};

export const fetchUserRegister = (userDataRegister: {
  name: string;
  surname: string;
  email: string;
  password: string;
}): Promise<TUser> => {
  return fetchConfig("/api/users", "PUT", userDataRegister).then((data) =>
    UserSchema.parse(data)
  );
};
