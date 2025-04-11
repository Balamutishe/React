import { ChangeEvent, FC, FormEvent } from "react";

import c from "./Posts.module.css";

type TPostsFormProps = {
	postText: string;
	handlePostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handlePostAdd: (e: FormEvent<HTMLFormElement>) => void
}

export const PostsForm: FC<TPostsFormProps> = ({
	postText, handlePostChange, handlePostAdd
}) => {
	return (
		<form
			className={ c.form } onSubmit={ handlePostAdd }
		>
			<textarea
				className={ c.textarea } value={ postText }
				onChange={ handlePostChange }
			></textarea>
			<button>
				Add Post
			</button>
		</form>
	)
}