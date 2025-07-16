import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogin } from "../fetch";

export const useMutateLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: fetchLogin,
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["refresh"] });
      },
    },
    queryClient
  );
};
