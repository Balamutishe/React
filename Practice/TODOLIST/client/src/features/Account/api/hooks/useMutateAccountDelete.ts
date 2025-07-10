import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAccountDelete } from "../fetch";

export const useMutateAccountDelete = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchAccountDelete(id),
    },
    queryClient
  );
};
