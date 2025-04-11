import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserData } from "./UserData/UserData.tsx";
import { Posts } from "./Posts/Posts.tsx";
import { RootState } from "../../redux";
import c from './Profile.module.css'
import { setDeletePostId, setPostText } from "../../redux/ProfileSlice.ts";
import { useMutatePostAdd, useMutatePostDelete } from "../../hooks/api";

type TProfileProps = {
	authState: boolean
}

export const Profile: FC<TProfileProps> = ({ authState }) => {
	const dispatch = useDispatch()
	const { user, postsData } = useSelector(
		(state: RootState) => state.profileData)
	const addPost = useMutatePostAdd(postsData.postText)
	const deletePost = useMutatePostDelete()

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

	return (
		<div className={ c.profile }>
			{ authState ? (<>
				<UserData username={ user.username } userImg={ user.userImg }/>
				<Posts
					postsData={ postsData }
					handlePostChange={ handlePostChange }
					handlePostAdd={ handlePostAdd }
					handlePostDelete={ handlePostDelete }
				/>
			</>) : (
				<div>Главная страница</div>
			) }
		</div>
	)

}