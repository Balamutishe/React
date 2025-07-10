import { UserSchema, type TUser } from "@entities/User";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchUserLogin = (userDataLogin: {
  loginOrPassword: string;
  password: string;
}): Promise<TUser> => {
  return fetchConfig("/api/users", "POST", userDataLogin).then((data) =>
    UserSchema.parse(data)
  );
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
