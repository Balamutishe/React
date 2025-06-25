import { fetchUserLogin } from "@shared/api/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateUserLogin = (userDataLogin: {
  username: string;
  password: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserLogin(userDataLogin),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["users", "me"] }),
    },
    queryClient
  );
};
