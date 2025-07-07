import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTaskDelete = (id: string): Promise<string> => {
  return fetchConfig(`/api/tasks/${id}`, "DELETE");
};
