import {
	useMutation
} from "@tanstack/react-query";
import { deletePost } from "../../api/posts/posts.ts";
import { queryClient } from "../../api/queryClient.ts";
import { useQueryGetAllPosts } from "./useQueryGetAllPosts.ts";
import { useDispatch } from "react-redux";

type TUseMutatePostDelete = {
	postId: string;
}

export const useMutatePostDelete = ({
	postId
}: TUseMutatePostDelete) => {
	const { refetch } = useQueryGetAllPosts()
	const dispatch = useDispatch()

	const { mutate } = useMutation({
		mutationFn: () => deletePost(postId),
		onSuccess: async () => {
			await refetch()
			dispatch({ type: 'userData/deletePost', payload: postId })
		}
	}, queryClient)

	return mutate
}