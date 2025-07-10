import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultTasksGetAll,
  type ModelFetchResultTasksGetAll,
} from "../models";
import type { TTask } from "@entities/Task";

export const fetchTasks = (
  filter?: Pick<TTask, "title">
): Promise<ModelFetchResultTasksGetAll> => {
  return fetchConfig(`/api/tasks?${filter}`, "GET").then((data) =>
    SchemaFetchResultTasksGetAll.parse(data)
  );
};
