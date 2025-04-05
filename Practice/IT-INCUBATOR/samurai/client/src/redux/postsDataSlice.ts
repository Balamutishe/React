import { createSlice } from "@reduxjs/toolkit";

const postsDataSlice = createSlice({
	name: "postsData",
	initialState: {
		posts: []
	},
	reducers: {
		useSetPosts: (state, action) => {
			state.posts = action.payload
			console.log(state.posts);
			return state;
		},
		useAddPost: (state, action) => {
			state.posts = state.posts.concat(action.payload)
			return state;
		}
	}
})

export const { useSetPosts, useAddPost } = postsDataSlice.actions;

export default postsDataSlice.reducer;