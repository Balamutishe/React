import createClient, { type Middleware } from "openapi-fetch";
import { type paths } from "./schema";
import { baseUrl, apiKey, refreshTokenKey, accessTokenKey } from "./apiConfig";

let refreshPromise: Promise<void> | null = null;

const makeRefreshToken = () => {
  if (!refreshPromise) {
    refreshPromise = fetch(`${baseUrl}auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem(refreshTokenKey),
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to refresh token");
        }
        return await response.json();
      })
      .then((data) => {
        localStorage.setItem(accessTokenKey, data.accessToken);
        localStorage.setItem(refreshTokenKey, data.refreshToken);
      })
      .catch((error) => {
        // localStorage.removeItem("musicfun-access-token");
        // localStorage.removeItem("musicfun-refresh-token");
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
    const accessToken = localStorage.getItem(accessTokenKey);

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
      const errorBody = await response.json();
      throw new Error(errorBody);
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
        `Bearer ${localStorage.getItem(accessTokenKey)}`
      );

      return fetch(retryRequest);
    } catch {
      return response;
    }
  },
};

export const client = createClient<paths>({
  baseUrl: `${baseUrl}`,
  headers: {
    "api-key": `${apiKey}`,
  },
});

client.use(authMiddleware);
