import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { createPost } from "../../api/posts/posts.ts";
import userImg from '../../assets/149071.png'
import { useQueryGetAllPosts } from "./useQueryGetAllPosts.ts";


export const useMutatePostAdd = () => {
	const { refetch } = useQueryGetAllPosts()
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.userData.user._id)
	const postText = useSelector((state: RootState) => state.userData.postText)

	const { mutate } = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: async (data) => {
			await refetch()
			dispatch({
				type: 'userData/addPost',
				payload: data
			})
			dispatch({
				type: 'userData/setPostText',
				payload: ''
			})
		}
	}, queryClient)

	return mutate
}