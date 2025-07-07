import { TaskSchema, type TTask } from "@entities/Task";
import { fetchConfig } from "@shared/utils/fetchConfig";

export const fetchTaskChange = (taskData: Partial<TTask>): Promise<TTask> => {
  return fetchConfig(`/api/tasks/${taskData.id}`, "PATCH", taskData).then(
    (data) => TaskSchema.parse(data)
  );
};
