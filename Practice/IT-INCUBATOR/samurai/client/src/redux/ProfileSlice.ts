import { createSlice } from "@reduxjs/toolkit";
import { TPost, TPostsList } from "../api/posts/types.ts";
import { TUser } from "../api/users/types.ts";

interface IInitialState {
		user: TUser,
		subscriptionIdUpdate: string,
		postsData: {
				posts: TPostsList,
				postText: string,
				deletePostId: string
		}
}

const initialState: IInitialState = {
		user: {
				_id: "",
				username: "",
				userImg: "/src/assets/149071.png",
				subscriptions: [],
		},
		subscriptionIdUpdate: "",
		postsData: {
				posts: [],
				postText: "",
				deletePostId: "",
		},
};

const profileSlice = createSlice({
		name: "profileData",
		initialState: initialState,
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
						state.postsData.postText = "";
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
				},
		},
});

export const {
		setProfile, setSubscriptionIdUpdate, addPost, deletePost, setPostsData,
		setPostText,
		setDeletePostId,
} = profileSlice.actions;

export default profileSlice.reducer;