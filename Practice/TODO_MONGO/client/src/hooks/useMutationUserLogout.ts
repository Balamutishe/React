import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";
import { logoutUser } from "../api/Users";

export const useMutationUserLogout = () => {
  return useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["user", "me"] });
      },
    },
    queryClient
  );
};
