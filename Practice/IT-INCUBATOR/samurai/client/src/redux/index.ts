import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from './userDataSlice.ts'
import PostsDataReducer from './postsDataSlice.ts'

const store = configureStore({
	reducer: {
		userData: UserDataReducer,
		postsData: PostsDataReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store