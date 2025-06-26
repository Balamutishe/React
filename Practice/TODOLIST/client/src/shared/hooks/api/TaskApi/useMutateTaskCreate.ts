import { fetchTaskCreate } from "@shared/api/Task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateTaskCreate = (taskData: {
  title: string;
  description: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchTaskCreate(taskData),
    },
    queryClient
  );
};
