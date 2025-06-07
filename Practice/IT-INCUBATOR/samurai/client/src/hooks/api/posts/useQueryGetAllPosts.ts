import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPosts } from "../../../api/posts/posts.ts";

export const useQueryGetAllPosts = () => {
  const queryClient = useQueryClient();

  return useQuery(
    {
      queryFn: () => getAllPosts(),
      queryKey: ["posts"],
    },
    queryClient
  );
};
