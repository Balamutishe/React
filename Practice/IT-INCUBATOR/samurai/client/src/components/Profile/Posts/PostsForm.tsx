import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutatePostAdd } from "../../../hooks/api";
import { setPostText } from "../../../redux/PostsSlice.ts";
import { RootState } from "../../../redux";
import c from "./Posts.module.css";

export const PostsForm = () => {
		const dispatch = useDispatch();
		const postText = useSelector(
			(state: RootState) => state.postsData.postText);
		const addPost = useMutatePostAdd(postText);
		
		const handlePostAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addPost();
		};
		const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setPostText(e.target.value));
		};
		
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