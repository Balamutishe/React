import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultTaskChange,
  type ModelFetchResultTaskChange,
  type ModelFetchDataTaskChange,
} from "../models";

export const fetchTaskChange = (
  taskData: ModelFetchDataTaskChange
): Promise<ModelFetchResultTaskChange> => {
  return fetchConfig(`/api/tasks/${taskData._id}`, "PATCH", taskData).then(
    (data) => SchemaFetchResultTaskChange.parse(data)
  );
};
