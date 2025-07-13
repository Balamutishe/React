import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogout } from "../fetch";
import { useAppDispatch } from "@app/redux/store";
import { setAuthStatus } from "@features/Auth/slices";

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
