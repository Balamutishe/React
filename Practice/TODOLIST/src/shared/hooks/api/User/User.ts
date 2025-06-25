import type { TUser } from "@entities/types/User";
import {
  fetchUserLogin,
  fetchUserMe,
  fetchUserChange,
  fetchUserDelete,
  fetchUserRegister,
} from "@shared/api/User/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryUserMe = () => {
  const queryClient = useQueryClient();
  return useQuery(
    {
      queryKey: ["users", "me"],
      queryFn: () => fetchUserMe(),
    },
    queryClient
  );
};

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

export const useMutateUserChange = (userData: Partial<TUser>) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserChange(userData),
    },
    queryClient
  );
};

export const useMutateUserDelete = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: () => fetchUserDelete(id),
    },
    queryClient
  );
};
