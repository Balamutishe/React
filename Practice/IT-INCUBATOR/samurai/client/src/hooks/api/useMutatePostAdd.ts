import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { SetStateAction } from 'react'

import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { TPostsList } from "../../api/posts/types.ts";
import { createPost } from "../../api/posts/posts.ts";
import userImg from '../../assets/149071.png'


type TUseMutatePostAddProps = {
	postText: string
	setPostText: (value: SetStateAction<string>) => void
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const useMutatePostAdd = ({
	postText, setPostText, refetch
}: TUseMutatePostAddProps) => {
	const userId = useSelector((state: RootState) => state.userData._id)

	const { mutate } = useMutation({
		mutationFn: () => createPost(postText, userId, userImg),
		onSuccess: async () => {
			await refetch()
			setPostText('')
		}
	}, queryClient)

	return mutate
}