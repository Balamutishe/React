import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogout } from "../fetch";

export const useMutateLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(
    {
      mutationFn: () => fetchLogout(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
    },
    queryClient
  );
};
