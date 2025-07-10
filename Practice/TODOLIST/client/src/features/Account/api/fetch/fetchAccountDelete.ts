import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchAccountDelete = (id: string): Promise<string> => {
  return fetchConfig(`/api/users/${id}`, "DELETE");
};
