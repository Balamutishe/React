import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createPost } from "../../../api/posts/posts.ts";
import { addPost } from "../../../redux/PostsSlice.ts";

export const useMutatePostAdd = () => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: createPost,
				onSuccess: (data) => dispatch(addPost(data)),
		}, queryClient);
};