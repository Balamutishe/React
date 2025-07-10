import { fetchConfig } from "@shared/utils/fetchConfig";
import {
  SchemaFetchResultLogin,
  type ModelFetchDataLogin,
  type ModelFetchResultLogin,
} from "../models";

export const fetchLogin = (
  userDataLogin: ModelFetchDataLogin
): Promise<ModelFetchResultLogin> => {
  return fetchConfig("/api/login", "POST", userDataLogin).then((data) =>
    SchemaFetchResultLogin.parse(data)
  );
};
