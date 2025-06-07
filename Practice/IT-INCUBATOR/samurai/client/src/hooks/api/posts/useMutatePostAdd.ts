import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "../../../api/posts/posts.ts";

export const useMutatePostAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    {
      mutationFn: createPost,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    },
    queryClient
  );
};
