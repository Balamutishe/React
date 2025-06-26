import { fetchUserDelete } from "@shared/api/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateUserDelete = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserDelete(id),
    },
    queryClient
  );
};
