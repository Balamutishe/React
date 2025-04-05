import { useState } from "react";

import { useMutatePostAdd } from "../../../hooks/api";
import c from "./Posts.module.css";

export const PostsForm = () => {
	const [postText, setPostText] = useState('')

	const addPost = useMutatePostAdd({ postText, setPostText })

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addPost()
		} }
		>
				<textarea
					className={ c.textarea } value={ postText }
					onChange={ (e) => setPostText(e.target.value) }
				></textarea>
			<button>
				Add Post
			</button>
		</form>
	)
}