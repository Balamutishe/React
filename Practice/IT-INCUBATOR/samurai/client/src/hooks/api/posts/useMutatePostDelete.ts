import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchDeletePost } from "../../../api/posts/posts.ts";

export const useMutatePostDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: fetchDeletePost,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    },
    queryClient
  );
};
