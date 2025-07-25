import { client } from "@shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await client.POST("/auth/logout", {
        body: {
          refreshToken: localStorage.getItem("musicfun-refresh-token")!,
        },
      });

      return response.data;
    },
    onSuccess: async () => {
      localStorage.removeItem("musicfun-refresh-token");
      localStorage.removeItem("musicfun-access-token");
      await queryClient.resetQueries({ queryKey: ["auth", "me"] });
    },
  });
};
