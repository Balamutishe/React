import { validateResponse } from "@shared/utils/validateResponse";
import { SchemaFetchResultRefresh } from "../models";

export const fetchRefresh = () => {
  return fetch("/api/refresh", {
    method: "GET",
  })
    .then(validateResponse)
    .then(async (response) => {
      const authToken = response.headers.get("Authorization");

      return {
        token: authToken,
        data: await response.json(),
      };
    })
    .then((data) => SchemaFetchResultRefresh.parse(data));
};
