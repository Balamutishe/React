import { useState, FC } from "react";
import {
	useMutation,
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import c from "./Posts.module.css";
import userImg from '../../../assets/149071.png'
import { createPost } from "../../../api/posts/posts.ts";
import { queryClient } from "../../../api/queryClient.ts";
import { TPostsList } from "../../../api/posts/types.ts";

type TPostsFormProps = {
	userId: string
	userImg?: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const PostsForm: FC<TPostsFormProps> = ({
	userId, refetch
}) => {
	const [postText, setPostText] = useState('')

	const addPost = useMutation({
		mutationFn: () => createPost({ postText, userId, userImg }),
		onSuccess: async () => {
			await refetch()
			setPostText('')
		}
	}, queryClient)

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addPost.mutate()
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