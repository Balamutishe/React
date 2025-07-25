import { client } from "@shared/api";
import { useQuery } from "@tanstack/react-query";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const response = await client.GET("/auth/me");

      return response.data;
    },
    retry: false,
  });
};
