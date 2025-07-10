import { UserSchema, type TUser } from "@entities/User";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchAccountChange = (
  userData: Partial<TUser>
): Promise<TUser> => {
  return fetchConfig(`/api/users/${userData.id}`, "PATCH", userData).then(
    (data) => UserSchema.parse(data)
  );
};
