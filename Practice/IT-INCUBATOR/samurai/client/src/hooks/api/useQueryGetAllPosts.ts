import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export const useQueryGetAllPosts = () => {
	const userId = useSelector((state: RootState) => state.profileData.user._id)

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