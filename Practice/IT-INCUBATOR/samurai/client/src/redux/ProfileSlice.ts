import { createSlice } from "@reduxjs/toolkit"
import { TPost } from "../api/posts/types.ts";

const profileSlice = createSlice({
	name: "profileData",
	initialState:
		{
			user: {
				_id: '',
				username: '',
				password: '',
				userImg: ''
			},
			posts: [],
			postText: '',
		},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			return state;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
			return state;
		},
		addPost: (state, action) => {
			state.posts = state.posts.concat(action.payload);
			return state;
		},
		deletePost: (state, action) => {
			state.posts =
				state.posts.filter((post: TPost) => post._id !== action.payload);
			return state;
		},
		setPostText: (state, action) => {
			state.postText = action.payload;
			return state;
		}
	}
})

export const {
	setUser, setPosts, addPost, deletePost, setPostText
} = profileSlice.actions;

export default profileSlice.reducer;