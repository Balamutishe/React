import { validateResponse } from "./validateResponse";

export const fetchConfig = (
  URL: string,
  methodData: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  bodyData?: object
) => {
  switch (methodData) {
    case "GET":
    case "DELETE":
      return fetch(URL, {
        method: methodData,
      })
        .then(validateResponse)
        .then((response) => response.json());
    case "POST":
    case "PATCH":
    case "PUT":
      return fetch(URL, {
        method: methodData,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      })
        .then(validateResponse)
        .then((response) => response.json());
  }
};
