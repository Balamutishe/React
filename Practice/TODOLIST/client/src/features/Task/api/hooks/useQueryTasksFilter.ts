import { fetchTasksFilter } from "../../../Task/api/fetch/fetchTasksFilter";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryTasksFilter = (filter: string) => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchTasksFilter(filter),
    },
    queryClient
  );
};
