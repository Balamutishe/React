import {
  TaskSchema,
  TasksListSchema,
  type TTask,
  type TTasksList,
} from "@entities/types/Task";
import { validateResponse } from "@shared/utils/validateResponse";

export const fetchTasksGet = (): Promise<TTasksList> => {
  return fetch("/api/tasks", { method: "GET" })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => TasksListSchema.parse(data));
};

export const fetchTaskCreate = (
  taskData: Omit<TTask, "id">
): Promise<TTask> => {
  return fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskData,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => TaskSchema.parse(data));
};

export const fetchTaskChange = (taskData: Partial<TTask>): Promise<TTask> => {
  return fetch(`/api/tasks/${taskData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskData,
    }),
  })
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => TaskSchema.parse(data));
};

export const fetchTaskDelete = (id: string): Promise<string> => {
  return fetch(`/api/tasks/${id}`, { method: "DELETE" })
    .then(validateResponse)
    .then((response) => response.json());
};
