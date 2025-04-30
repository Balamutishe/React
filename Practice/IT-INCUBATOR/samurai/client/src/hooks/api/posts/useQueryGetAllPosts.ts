import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPosts } from "../../../api/posts/posts.ts";
import { useDispatch } from "react-redux";
import { setPostsData } from "../../../redux/PostsSlice.ts";

export const useQueryGetAllPosts = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: async () => await getAllPosts()
				.then((data) => {
						dispatch(setPostsData(data));
						return data;
				}),
				queryKey: ["posts"],
		}, queryClient);
};