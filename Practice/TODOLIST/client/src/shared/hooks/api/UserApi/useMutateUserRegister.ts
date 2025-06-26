import { fetchUserRegister } from "@shared/api/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMutateUserRegister = (userDataRegister: {
  name: string;
  surname: string;
  email: string;
  password: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserRegister(userDataRegister),
    },
    queryClient
  );
};
