import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { useMutatePostAdd } from "../../../hooks/api";
import { setPostText } from "../../../redux/PostsSlice.ts";
import c from "./Posts.module.css";

type TPostsFormProps = {
		postText: string;
}

export const PostsForm: FC<TPostsFormProps> = ({ postText }) => {
		const dispatch = useDispatch();
		const addPost = useMutatePostAdd(postText);
		
		const handlePostAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addPost();
		};
		const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(
			setPostText(e.target.value));
		
		return (
			<form className={ c.form } onSubmit={ handlePostAdd }>
			<textarea
				className={ c.textarea } value={ postText }
				onChange={ handlePostChange }
			></textarea>
					<button>
							Add Post
					</button>
			</form>
		);
};