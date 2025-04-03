import { useState, FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import c from "./Posts.module.css";
import { TPostsList } from "../../../api/posts/types.ts";
import { useMutatePostAdd } from "../../../hooks/api/useMutatePostAdd.ts";

type TPostsFormProps = {
	userImg?: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const PostsForm: FC<TPostsFormProps> = ({
	refetch
}) => {
	const [postText, setPostText] = useState('')

	const addPost = useMutatePostAdd({ postText, setPostText, refetch })

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