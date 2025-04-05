import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
	name: "userData",
	initialState:
		{
			user: {
				_id: '',
				username: '',
				password: '',
				userImg: '',
			}
		},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			return state;
		}
	}
})

export const { setUser } = userDataSlice.actions;

export default userDataSlice.reducer;