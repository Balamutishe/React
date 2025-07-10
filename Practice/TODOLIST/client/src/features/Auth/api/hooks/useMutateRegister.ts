import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchRegister } from "../fetch";
import type { ModelFetchDataRegister } from "../models";

export const useMutateRegister = (userDataRegister: ModelFetchDataRegister) => {
  const queryClient = useQueryClient();
  return useMutation(
    {
      mutationFn: () => fetchRegister(userDataRegister),
    },
    queryClient
  );
};
