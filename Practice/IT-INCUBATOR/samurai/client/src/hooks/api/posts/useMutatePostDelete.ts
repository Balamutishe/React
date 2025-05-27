import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeletePost } from "../../../api/posts/posts.ts";
import { deletePost } from "../../../redux/PostsSlice.ts";

export const useMutatePostDelete = (postId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => fetchDeletePost(postId),
				onSuccess: () => {
						dispatch(deletePost(postId));
				},
		}, queryClient);
};