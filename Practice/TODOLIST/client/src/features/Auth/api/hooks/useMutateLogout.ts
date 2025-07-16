import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogout } from "../fetch";
import { setAuthStatus } from "@features/Auth/slices";
import { useAppDispatch } from "@app/redux/store";

export const useMutateLogout = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation(
    {
      mutationFn: () => fetchLogout(),
      onSuccess: async () => {
        dispatch(setAuthStatus(false));
        await queryClient.invalidateQueries({ queryKey: ["refresh"] });
      },
    },
    queryClient
  );
};
