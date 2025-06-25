import type { TUser } from "@entities/types/User";
import { fetchUserChange } from "@shared/api/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateUserChange = (userData: Partial<TUser>) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserChange(userData),
    },
    queryClient
  );
};
