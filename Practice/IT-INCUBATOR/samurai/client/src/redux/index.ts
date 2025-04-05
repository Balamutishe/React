import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from './userDataSlice.ts'

const store = configureStore({
	reducer: {
		userData: UserDataReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store