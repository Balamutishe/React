import { TasksListSchema, type TTasksList } from "@entities/Task";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTasksFilter = (filter: string): Promise<TTasksList> => {
  return fetchConfig(`/api/tasks?${filter}`, "GET").then((data) =>
    TasksListSchema.parse(data)
  );
};
