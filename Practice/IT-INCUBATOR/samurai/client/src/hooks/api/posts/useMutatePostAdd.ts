import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createPost } from "../../../api/posts/posts.ts";
import { addPost } from "../../../redux/PostsSlice.ts";

export const useMutatePostAdd = (postText: string) => {
		const dispatch = useDispatch();
		const queryClient = useQueryClient();
		
		return useMutation({
				mutationFn: () => createPost(postText),
				onSuccess: async (data) => {
						dispatch(addPost(data));
						await queryClient.invalidateQueries({ queryKey: ["posts"] });
				},
		}, queryClient);
};