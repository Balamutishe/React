import { fetchTasksAll } from "./fetchTasksAll";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryTasks = () => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchTasksAll(),
    },
    queryClient
  );
};
