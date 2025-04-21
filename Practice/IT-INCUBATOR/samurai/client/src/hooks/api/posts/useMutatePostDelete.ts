import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchDeletePost } from "../../../api/posts/posts.ts";
import { setDeletePostId } from "../../../redux/PostsSlice.ts";
import { RootState } from "../../../redux";

export const useMutatePostDelete = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const deletePostId = useSelector(
			(state: RootState) => state.postsData.deletePostId);
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeletePost(deletePostId),
				onSuccess: async () => {
						dispatch(setDeletePostId(""));
						await queryClient.invalidateQueries({ queryKey: ["posts", "all"] });
				},
		}, queryClient);
		
		return mutate;
};