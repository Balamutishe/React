import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllPosts = (userId: string) => {
	const { data, status, refetch } = useQuery({
		queryFn: async () => await getAllPosts(userId),
		queryKey: ["posts", "all"]
	}, queryClient)

	const posts = data ? data : [];

	return {
		posts,
		status,
		refetch
	}
}