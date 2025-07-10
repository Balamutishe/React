import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAccountLogout } from "../fetch";

export const useMutateAccountLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(
    {
      mutationFn: () => fetchAccountLogout(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
    },
    queryClient
  );
};
