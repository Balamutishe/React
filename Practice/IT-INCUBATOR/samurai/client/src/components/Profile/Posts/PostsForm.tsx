import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux";
import { useMutatePostAdd } from "../../../hooks/api";
import c from "./Posts.module.css";

export const PostsForm = () => {
	const dispatch = useDispatch()

	const postText = useSelector((state: RootState) => state.profileData.postText)
	const addPost = useMutatePostAdd()
	const handleChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({ type: 'profileData/setPostText', payload: e.target.value })
	}

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addPost()
		} }
		>
			<textarea
				className={ c.textarea } value={ postText }
				onChange={ handleChangePostText }
			></textarea>
			<button>
				Add Post
			</button>
		</form>
	)
}