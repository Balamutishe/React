import { useDispatch, useSelector } from "react-redux";

import { useMutatePostAdd } from "../../../hooks/api";
import { RootState } from "../../../redux";
import c from "./Posts.module.css";

export const PostsForm = () => {
	const dispatch = useDispatch()
	const postText = useSelector((state: RootState) => state.profileData.postText)
	const addPost = useMutatePostAdd()

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addPost()
		} }
		>
			<textarea
				className={ c.textarea } value={ postText }
				onChange={ (e) => dispatch(
					{ type: 'profileData/setPostText', payload: e.target.value }) }
			></textarea>
			<button>
				Add Post
			</button>
		</form>
	)
}