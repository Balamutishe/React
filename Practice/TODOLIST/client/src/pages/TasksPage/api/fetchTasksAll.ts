import { TasksListSchema, type TTasksList } from "@entities/Task";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTasksAll = (): Promise<TTasksList> => {
  return fetchConfig("/api/tasks", "GET").then((data) =>
    TasksListSchema.parse(data)
  );
};
