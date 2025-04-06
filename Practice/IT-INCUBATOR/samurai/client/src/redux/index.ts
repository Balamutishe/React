import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from './ProfileSlice.ts'

const store = configureStore({
	reducer: {
		profileData: ProfileReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store