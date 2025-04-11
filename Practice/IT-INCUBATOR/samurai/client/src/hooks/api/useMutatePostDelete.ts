import {
	useMutation
} from "@tanstack/react-query";
import { fetchDeletePost } from "../../api/posts/posts.ts";
import { deletePost } from '../../redux/ProfileSlice.ts'
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
		mutationFn: () => fetchDeletePost(postId),
		onSuccess: () => {
			dispatch(deletePost(postId))
		}
	}, queryClient)

	return mutate
}