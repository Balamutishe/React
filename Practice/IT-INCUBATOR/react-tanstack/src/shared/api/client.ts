import createClient from "openapi-fetch";
import { type paths } from "./schema";

export const client = createClient<paths>({
  baseUrl: "https://musicfun.it-incubator.app/api/1.0/",
  headers: {
    "api-key": "dc801b81-3ff9-44de-89bf-5e6053d49d68",
  },
});
