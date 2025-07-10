import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultLogout,
  type ModelFetchResultLogout,
} from "../models/ModelLogout";

export const fetchLogout = (): Promise<ModelFetchResultLogout> => {
  return fetchConfig("/api/logout", "POST").then((data) =>
    SchemaFetchResultLogout.parse(data)
  );
};
