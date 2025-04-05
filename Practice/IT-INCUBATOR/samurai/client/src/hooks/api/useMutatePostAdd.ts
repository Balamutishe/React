import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { SetStateAction } from 'react'

import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { createPost } from "../../api/posts/posts.ts";
import userImg from '../../assets/149071.png'
import { useQueryGetAllPosts } from "./useQueryGetAllPosts.ts";


type TUseMutatePostAddProps = {
	postText: string
	setPostText: (value: SetStateAction<string>) => void
}

export const useMutatePostAdd = ({
	postText, setPostText
}: TUseMutatePostAddProps) => {
	const { refetch } = useQueryGetAllPosts()
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.userData.user._id)

	const { mutate } = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: async (data) => {
			await refetch()
			setPostText('')
			dispatch({
				type: 'userData/addPost',
				payload: data
			})
		}
	}, queryClient)

	return mutate
}