import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultTaskCreate,
  type ModelFetchDataTaskCreate,
  type ModelFetchResultTaskCreate,
} from "../models";

export const fetchTaskCreate = (
  taskData: ModelFetchDataTaskCreate
): Promise<ModelFetchResultTaskCreate> => {
  return fetchConfig("/api/tasks", "POST", taskData).then((data) =>
    SchemaFetchResultTaskCreate.parse(data)
  );
};
