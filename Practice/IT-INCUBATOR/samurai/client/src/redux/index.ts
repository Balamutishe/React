import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from './ProfileSlice.ts'
import DialogsReducer from './DialogsSlice.ts'

const store = configureStore({
	reducer: {
		profileData: ProfileReducer,
		dialogsData: DialogsReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store