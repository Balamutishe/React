import type { TTask } from "@entities/types/Task";
import { fetchTaskChange } from "../fetch";
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
