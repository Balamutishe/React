import { createSlice } from "@reduxjs/toolkit";
import { TPost, TPostsList } from "../api/posts/types.ts";

interface IInitialState {
		posts: TPostsList,
		postText: string,
		deletePostId: string
}

const initialState: IInitialState = {
		posts: [],
		postText: "",
		deletePostId: "",
};

const postsSlice = createSlice({
		name: "postsData",
		initialState: initialState,
		reducers: {
				setPostsData: (state, action) => {
						state.posts = action.payload;
				},
				addPost: (state, action) => {
						state.posts = state.posts.concat(action.payload);
						state.postText = "";
				},
				deletePost: (state, action) => {
						state.posts =
							state.posts.filter(
								(post: TPost) => post._id !== action.payload);
				},
				setPostText: (state, action) => {
						state.postText = action.payload;
				},
				setDeletePostId: (state, action) => {
						state.deletePostId = action.payload;
				},
		},
});

export const {
		addPost, deletePost, setPostsData,
		setPostText,
		setDeletePostId,
} = postsSlice.actions;

export default postsSlice.reducer;