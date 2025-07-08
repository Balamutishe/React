import { TaskSchema, type TTask } from "@entities/Task";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTaskCreate = (
  taskData: Omit<TTask, "id">
): Promise<TTask> => {
  return fetchConfig("/api/tasks", "POST", taskData).then((data) =>
    TaskSchema.parse(data)
  );
};
