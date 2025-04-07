import {
	useMutation
} from "@tanstack/react-query";
import { deletePost } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";
import { useDispatch } from "react-redux";

type TUseMutatePostDelete = {
	postId: string;
}

export const useMutatePostDelete = ({
	postId
}: TUseMutatePostDelete) => {
	const dispatch = useDispatch()

	const { mutate } = useMutation({
		mutationFn: () => deletePost(postId),
		onSuccess: async () => {
			dispatch({ type: 'profileData/deletePost', payload: postId })
		}
	}, queryClient)

	return mutate
}