import { fetchUserMe } from "./fetchUserMe";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryUserMe = () => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchUserMe(),
    },
    queryClient
  );
};
