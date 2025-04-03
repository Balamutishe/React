import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllPosts = () => {
	const userId = useSelector(
		(state: RootState) => state.userData._id)

	const { data, status, refetch } = useQuery({
		queryFn: () => getAllPosts(userId),
		queryKey: ["posts", "all"]
	}, queryClient)

	return {
		data,
		status,
		refetch
	}
}