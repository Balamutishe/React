import { fetchConfig } from "@shared/utils/fetchConfig";
import type {
  ModelFetchDataTaskDelete,
  ModelFetchResultTaskDelete,
} from "../models";

export const fetchTaskDelete = (
  id: ModelFetchDataTaskDelete
): Promise<ModelFetchResultTaskDelete> => {
  return fetchConfig(`/api/tasks/${id}`, "DELETE");
};
