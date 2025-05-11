import { createSlice } from "@reduxjs/toolkit";
import { TPost, TPostsList } from "../api/posts/types.ts";

interface IInitialState {
		posts: TPostsList,
		postText: string,
}

const initialState: IInitialState = {
		posts: [],
		postText: "",
};

const postsSlice = createSlice({
		name: "postsData",
		initialState: initialState,
		reducers: {
				setPostsData: (state, action) => {
						state.posts = action.payload;
						state.posts.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
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
		},
});

export const {
		addPost, deletePost, setPostsData,
		setPostText,
} = postsSlice.actions;

export default postsSlice.reducer;