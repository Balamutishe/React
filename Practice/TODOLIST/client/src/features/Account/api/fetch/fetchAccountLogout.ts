import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchAccountLogout = (): Promise<string> => {
  return fetchConfig("/api/users", "POST");
};
