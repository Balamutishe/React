import { fetchTasks } from "../fetch/fetchTasks";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryTasks = () => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchTasks(),
    },
    queryClient
  );
};
