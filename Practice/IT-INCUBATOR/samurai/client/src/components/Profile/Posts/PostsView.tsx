import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent } from "react";

import { Posts } from "./Posts.tsx";
import { useMutatePostAdd, useMutatePostDelete, useQueryGetAllPosts } from "../../../hooks/api";
import { setDeletePostId, setPostText } from "../../../redux/PostsSlice.ts";
import { RootState } from "../../../redux";

export const PostsView = () => {
		const dispatch = useDispatch();
		const { postText } = useSelector(
			(state: RootState) => state.postsData);
		
		const queryPosts = useQueryGetAllPosts();
		const addPost = useMutatePostAdd(postText);
		const deletePost = useMutatePostDelete();
		
		const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setPostText(e.target.value));
		};
		const handlePostAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addPost();
		};
		const handlePostDelete = (id: string) => {
				dispatch(setDeletePostId(id));
				deletePost();
		};
		
		switch (queryPosts.status) {
				case "error":
						return <div>
								Произошла ошибка при получении данных
								<button onClick={ () => queryPosts.refetch() }>Повторить запрос</button>
						</div>;
				case "success":
						return <Posts
							posts={ queryPosts.data }
							postText={ postText }
							handlePostChange={ handlePostChange }
							handlePostAdd={ handlePostAdd }
							handlePostDelete={ handlePostDelete }
						/>;
		}
};