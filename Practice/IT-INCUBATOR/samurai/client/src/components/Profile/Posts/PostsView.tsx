import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent } from "react";

import { RootState } from "../../../redux";
import {
	useMutatePostAdd,
	useMutatePostDelete,
	useQueryGetAllPosts
} from "../../../hooks/api";
import { setDeletePostId, setPostText } from "../../../redux/ProfileSlice.ts";
import { Posts } from "./Posts.tsx";

export const PostsView = () => {
	const dispatch = useDispatch()
	const { postsData, user } = useSelector(
		(state: RootState) => state.profileData)

	const { posts, status, refetch } = useQueryGetAllPosts(user._id)
	const addPost = useMutatePostAdd(postsData.postText, user._id, refetch)
	const deletePost = useMutatePostDelete(refetch)

	const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setPostText(e.target.value))
	}
	const handlePostAdd = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addPost()
	}
	const handlePostDelete = (id: string) => {
		dispatch(setDeletePostId(id))
		deletePost()
	}

	switch (status) {
		case "error":
			return <div>
				Произошла ошибка при получении данных
				<button onClick={ () => refetch() }>Повторить запрос</button>
			</div>
		case "success":
			return <Posts
				posts={ posts }
				postText={ postsData.postText }
				handlePostChange={ handlePostChange }
				handlePostAdd={ handlePostAdd }
				handlePostDelete={ handlePostDelete }
			/>
	}
}