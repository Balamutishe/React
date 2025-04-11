import {
	useMutation
} from "@tanstack/react-query";
import { fetchDeletePost } from "../../api/posts/posts.ts";
import { deletePost, setDeletePostId } from '../../redux/ProfileSlice.ts'
import { queryClient } from "../../api/queryClient.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";

export const useMutatePostDelete = () => {
	const dispatch = useDispatch()
	const postId = useSelector(
		(state: RootState) => state.profileData.postsData.deletePostId)

	const { mutate } = useMutation({
		mutationFn: () => fetchDeletePost(postId),
		onSuccess: () => {
			dispatch(deletePost(postId))
			dispatch(setDeletePostId(''))
		}
	}, queryClient)

	return mutate
}