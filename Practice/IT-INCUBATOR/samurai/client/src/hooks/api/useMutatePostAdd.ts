import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { queryClient } from "../../api/queryClient.ts";
import { createPost } from "../../api/posts/posts.ts";
import { setPostText } from "../../redux/ProfileSlice.ts";
import { TPostsList } from "../../api/posts/types.ts";
import userImg from '../../assets/149071.png'

export const useMutatePostAdd = (postText: string, userId: string,
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>) => {
	const dispatch = useDispatch();

	const { mutate } = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: async () => {
			await refetch()
			dispatch(setPostText(''))
		}
	}, queryClient)

	return mutate
}