import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from './ProfileSlice.ts'
import DialogsReducer from './DialogsSlice.ts'
import AuthReducer from './AuthSlice.ts'

const store = configureStore({
	reducer: {
		authData: AuthReducer,
		profileData: ProfileReducer,
		dialogsData: DialogsReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store