import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchUser } from "../api/Users";

export const useQueryUser = () => {
  return useQuery(
    {
      queryFn: () => fetchUser(),
      queryKey: ["user", "me"],
      retry: false,
    },
    queryClient
  );
};
