import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/Users";
import { queryClient } from "../api/queryClient";

export const useMutationUserLogin = (username: string, password: string) => {
  return useMutation(
    {
      mutationFn: () => loginUser(username, password),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["user", "me"] });
      },
    },
    queryClient
  );
};
