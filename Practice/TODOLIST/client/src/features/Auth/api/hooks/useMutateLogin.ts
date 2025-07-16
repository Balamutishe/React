import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogin } from "../fetch";
import { useAppDispatch } from "@app/redux/store";
import { setAuthStatus } from "@features/Auth/slices";

export const useMutateLogin = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation(
    {
      mutationFn: fetchLogin,
      onSuccess: async () => {
        dispatch(setAuthStatus(true));
        await queryClient.invalidateQueries({ queryKey: ["refresh"] });
      },
    },
    queryClient
  );
};
