import { UserSchema, type TUser } from "@entities/User";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchUserMe = (): Promise<TUser> => {
  return fetchConfig("/api/users/me", "GET").then((data) =>
    UserSchema.parse(data)
  );
};
