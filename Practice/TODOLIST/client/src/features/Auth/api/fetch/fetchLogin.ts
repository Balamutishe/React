import { SchemaFetchResultLogin, type ModelFetchDataLogin } from "../models";
import { validateResponse } from "@shared/utils/validateResponse";

export const fetchLogin = (userDataLogin: ModelFetchDataLogin) => {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDataLogin),
  })
    .then(validateResponse)
    .then(async (response) => {
      const authToken = response.headers.get("Authorization");

      return {
        token: authToken,
        data: await response.json(),
      };
    })
    .then((data) => SchemaFetchResultLogin.parse(data));
};
