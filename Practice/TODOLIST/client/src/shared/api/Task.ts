import {
  TaskSchema,
  TasksListSchema,
  type TTask,
  type TTasksList,
} from "@entities/types/Task";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTasksGet = (): Promise<TTasksList> => {
  return fetchConfig("/api/tasks", "GET").then((data) =>
    TasksListSchema.parse(data)
  );
};

export const fetchTaskCreate = (
  taskData: Omit<TTask, "id">
): Promise<TTask> => {
  return fetchConfig("/api/tasks", "POST", taskData).then((data) =>
    TaskSchema.parse(data)
  );
};

export const fetchTaskChange = (taskData: Partial<TTask>): Promise<TTask> => {
  return fetchConfig(`/api/tasks/${taskData.id}`, "PATCH", taskData).then(
    (data) => TaskSchema.parse(data)
  );
};

export const fetchTaskDelete = (id: string): Promise<string> => {
  return fetchConfig(`/api/tasks/${id}`, "DELETE");
};
