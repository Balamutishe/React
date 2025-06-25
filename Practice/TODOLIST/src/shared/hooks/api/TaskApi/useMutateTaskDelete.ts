import { fetchTaskDelete } from "@shared/api/Task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateTaskDelete = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchTaskDelete(id),
    },
    queryClient
  );
};
