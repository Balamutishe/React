import { fetchTasksFilter } from "./fetchTasksFilter";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryTasks = (filter: string) => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchTasksFilter(filter),
    },
    queryClient
  );
};
