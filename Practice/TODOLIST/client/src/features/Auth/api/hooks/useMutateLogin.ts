import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogin } from "../fetch";
import type { ModelFetchDataLogin } from "../models";

export const useMutateLogin = (userDataLogin: ModelFetchDataLogin) => {
  const queryClient = useQueryClient();
  return useMutation(
    {
      mutationFn: () => fetchLogin(userDataLogin),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
    },
    queryClient
  );
};
