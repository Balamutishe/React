import { fetchTasksGet } from "../fetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryUserMe = () => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchTasksGet(),
    },
    queryClient
  );
};
