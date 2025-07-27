import { client } from "@shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      code,
      redirectUri,
    }: {
      code: string;
      redirectUri: string;
    }) => {
      const response = await client.POST("/auth/login", {
        body: {
          code,
          redirectUri,
          rememberMe: true,
          accessTokenTTL: "1h",
        },
      });

      if (response.error) throw new Error(response.error.message);

      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("musicfun-refresh-token", data.refreshToken);
      localStorage.setItem("musicfun-access-token", data.accessToken);
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
};
