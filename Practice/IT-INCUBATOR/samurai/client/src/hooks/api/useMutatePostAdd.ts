import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { createPost } from "../../api/posts/posts.ts";
import userImg from '../../assets/149071.png'


export const useMutatePostAdd = () => {
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.profileData.user._id)
	const postText = useSelector((state: RootState) => state.profileData.postText)

	const { mutate } = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: (data) => {
			dispatch({
				type: 'profileData/addPost',
				payload: data
			})
		}
	}, queryClient)

	return mutate
}