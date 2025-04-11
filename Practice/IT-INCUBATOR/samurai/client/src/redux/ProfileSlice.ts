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
		setProfile: (state, action) => {
			state.user = action.payload.user;
			state.posts = action.payload.posts;
		},
		addPost: (state, action) => {
			state.posts = state.posts.concat(action.payload);
			state.postText = '';
		},
		deletePost: (state, action) => {
			state.posts =
				state.posts.filter((post: TPost) => post._id !== action.payload);
		},
		setPostText: (state, action) => {
			state.postText = action.payload;
		}
	}
})

export const {
	setProfile, addPost, deletePost, setPostText
} = profileSlice.actions;

export default profileSlice.reducer;