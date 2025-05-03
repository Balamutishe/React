import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice.ts";
import DialogsReducer from "./DialogsSlice.ts";
import PostsReducer from "./PostsSlice.ts";
import ProfileReducer from "./ProfileSlice.ts";
import UsersReducer from "./UsersSlice.ts";

const store = configureStore({
		reducer: {
				authData: AuthReducer,
				profileData: ProfileReducer,
				postsData: PostsReducer,
				dialogsData: DialogsReducer,
				usersData: UsersReducer,
		},
});

export type RootState = ReturnType<typeof store.getState>

export default store;