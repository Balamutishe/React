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
				userImg: '',
			},
			postsData: {
				posts: [],
				postText: '',
				deletePostId: '',
			}
		},
	reducers: {
		setProfile: (state, action) => {
			state.user = action.payload.user;
			state.postsData.posts = action.payload.posts;
		},
		addPost: (state, action) => {
			state.postsData.posts = state.postsData.posts.concat(action.payload);
			state.postsData.postText = '';
		},
		deletePost: (state, action) => {
			state.postsData.posts =
				state.postsData.posts.filter(
					(post: TPost) => post._id !== action.payload);
		},
		setPostText: (state, action) => {
			state.postsData.postText = action.payload;
		},
		setDeletePostId: (state, action) => {
			state.postsData.deletePostId = action.payload;
		}
	}
})

export const {
	setProfile, addPost, deletePost, setPostText, setDeletePostId
} = profileSlice.actions;

export default profileSlice.reducer;