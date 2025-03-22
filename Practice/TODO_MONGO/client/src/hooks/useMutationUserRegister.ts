import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/Users";
import { queryClient } from "../api/queryClient";

export const useMutationUserRegister = (username: string, password: string) => {
  return useMutation(
    {
      mutationFn: () => registerUser(username, password),
    },
    queryClient
  );
};
