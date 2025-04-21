import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { createPost } from "../../../api/posts/posts.ts";
import { setPostText } from "../../../redux/PostsSlice.ts";

export const useMutatePostAdd = (postText: string) => {
		const dispatch = useDispatch();
		const queryClient = useQueryClient();
		
		const { mutate } = useMutation({
				mutationFn: () => createPost(postText),
				onSuccess: async () => {
						dispatch(setPostText(""));
						await queryClient.invalidateQueries({ queryKey: ["posts", "all"] });
				},
		}, queryClient);
		
		return mutate;
};