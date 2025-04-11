import {
	useMutation
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";
import { createPost } from "../../api/posts/posts.ts";
import { addPost } from "../../redux/ProfileSlice.ts";
import userImg from '../../assets/149071.png'

export const useMutatePostAdd = (postText: string) => {
	const dispatch = useDispatch();
	const userId = useSelector((state: RootState) => state.profileData.user._id)

	const { mutate } = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: (data) => {
			dispatch(addPost(data));
		}
	}, queryClient)

	return mutate
}