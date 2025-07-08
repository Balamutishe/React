import type { TTask } from "@entities/Task";
import { fetchTaskCreate } from "../../../Task/api/fetch/fetchTaskCreate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateTaskCreate = (taskData: Omit<TTask, "id">) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchTaskCreate(taskData),
    },
    queryClient
  );
};
