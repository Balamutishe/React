import { validateResponse } from "./validateResponse";

export const fetchConfig = (
  URL: string,
  methodData: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  bodyData?: object | null,
  token?: string
) => {
  switch (methodData) {
    case "GET":
    case "DELETE":
      if (token) {
        return fetch(URL, {
          method: methodData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then(validateResponse)
          .then((response) => response.json());
      } else {
        return fetch(URL, {
          method: methodData,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(validateResponse)
          .then((response) => response.json());
      }
    case "POST":
    case "PATCH":
    case "PUT":
      if (token) {
        return fetch(URL, {
          method: methodData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then(validateResponse)
          .then((response) => response.json());
      } else {
        return fetch(URL, {
          method: methodData,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        })
          .then(validateResponse)
          .then((response) => {
            const authToken = response.headers.get("Authorization");
            console.log(authToken);

            return response.json();
          });
      }
  }
};
