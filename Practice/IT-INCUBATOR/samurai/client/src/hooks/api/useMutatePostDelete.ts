import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { fetchDeletePost } from "../../api/posts/posts.ts";
import { setDeletePostId } from '../../redux/ProfileSlice.ts'
import { queryClient } from "../../api/queryClient.ts";
import { useDispatch, useSelector } from "react-redux";
import { TPostsList } from "../../api/posts/types.ts";
import { RootState } from "../../redux";

export const useMutatePostDelete = (refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>) => {
	const dispatch = useDispatch()
	const deletePostId = useSelector(
		(state: RootState) => state.profileData.postsData.deletePostId)

	const { mutate } = useMutation({
		mutationFn: () => fetchDeletePost(deletePostId),
		onSuccess: async () => {
			await refetch()
			dispatch(setDeletePostId(''))
		}
	}, queryClient)

	return mutate
}