import type { TTask } from "@entities/Task";
import { fetchTaskChange } from "../../../Task/api/fetch/fetchTaskChange";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateTaskChange = (taskData: Partial<TTask>) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchTaskChange(taskData),
    },
    queryClient
  );
};
