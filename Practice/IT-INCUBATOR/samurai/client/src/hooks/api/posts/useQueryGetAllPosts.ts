import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../../api/posts/posts.ts";
import { setPostsData } from "../../../redux/PostsSlice.ts";

export const useQueryGetAllPosts = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: () => getAllPosts()
				.then((data) => {
						dispatch(setPostsData(data));
						return data;
				}),
				queryKey: ["posts"],
		}, queryClient);
};