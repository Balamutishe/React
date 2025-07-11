import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchRegister } from "../fetch";

export const useMutateRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(
    {
      mutationFn: fetchRegister,
    },
    queryClient
  );
};
