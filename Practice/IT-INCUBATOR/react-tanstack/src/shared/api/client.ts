import createClient, { type Middleware } from "openapi-fetch";
import { type paths } from "./schema";

let refreshPromise: Promise<void> | null = null;

const makeRefreshToken = () => {
  if (!refreshPromise) {
    refreshPromise = fetch(
      "https://musicfun.it-incubator.app/api/1.0/auth/refresh",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "dc801b81-3ff9-44de-89bf-5e6053d49d68",
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem("musicfun-refresh-token"),
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to refresh token");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("musicfun-access-token", data.accessToken);
        localStorage.setItem("musicfun-refresh-token", data.refreshToken);
      })
      .catch((error) => {
        localStorage.removeItem("musicfun-access-token");
        localStorage.removeItem("musicfun-refresh-token");
        console.error(error);
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};

const authMiddleware: Middleware = {
  onRequest({ request }) {
    const accessToken = localStorage.getItem("musicfun-access-token");
    if (accessToken) {
      request.headers.set("Authorization", `Bearer ${accessToken}`);
    }

    //@ts-expect-error hot fix
    request._retryRequest = request.clone();

    return request;
  },

  async onResponse({ response }) {
    if (response.ok) return response;

    if (!response.ok && response.status !== 401) {
      throw new Error(
        `${response.url}: ${response.status} ${response.statusText}`
      );
    }

    try {
      await makeRefreshToken();
      // @ts-expect-error ignore it
      const originalRequest: Request = request._retryRequest;
      const retryRequest = new Request(originalRequest, {
        headers: new Headers(originalRequest.headers),
      });

      retryRequest.headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("musicfun-access-token")}`
      );

      return fetch(retryRequest);
    } catch {
      return response;
    }
  },
};

export const client = createClient<paths>({
  baseUrl: "https://musicfun.it-incubator.app/api/1.0/",
  headers: {
    "api-key": "dc801b81-3ff9-44de-89bf-5e6053d49d68",
  },
});

client.use(authMiddleware);
