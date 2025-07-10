import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultRegister,
  type ModelFetchDataRegister,
  type ModelFetchResultRegister,
} from "../models/ModelRegister";

export const fetchRegister = (
  userDataRegister: ModelFetchDataRegister
): Promise<ModelFetchResultRegister> => {
  return fetchConfig("/api/register", "POST", userDataRegister).then((data) =>
    SchemaFetchResultRegister.parse(data)
  );
};
