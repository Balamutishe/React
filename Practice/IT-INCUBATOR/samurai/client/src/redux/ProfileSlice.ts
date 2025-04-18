import { createSlice } from "@reduxjs/toolkit"
import { TPost } from "../api/posts/types.ts";
import { getUserById } from "../api/users/users.ts";

const profileSlice = createSlice({
	name: "profileData",
	initialState:
		{
			user: await getUserById(
				'ea397cb1-6282-4e0b-b319-585c348a590f'),
			subscriptionIdUpdate: '',
			postsData: {
				posts: [],
				postText: '',
				deletePostId: '',
			}
		},
	reducers: {
		setProfile: (state, action) => {
			state.user = action.payload;
		},
		setSubscriptionIdUpdate: (state, action) => {
			state.subscriptionIdUpdate = action.payload;
		},
		setPostsData: (state, action) => {
			state.postsData.posts = action.payload;
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
	setProfile, setSubscriptionIdUpdate, addPost, deletePost, setPostsData,
	setPostText,
	setDeletePostId
} = profileSlice.actions;

export default profileSlice.reducer;