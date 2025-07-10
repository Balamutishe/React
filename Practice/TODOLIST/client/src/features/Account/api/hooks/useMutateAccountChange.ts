import type { TUser } from "@entities/User";
import { fetchAccountChange } from "../fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateAccountChange = (userData: Partial<TUser>) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchAccountChange(userData),
    },
    queryClient
  );
};
