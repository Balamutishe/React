import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
	name: "userData",
	initialState:
		{
			_id: '',
			username: '',
			password: '',
			userImg: '',
		},
	reducers: {
		setUser: (state, action) => {
			console.log(state);
			return state = action.payload;
		}
	}
})

export const { setUser } = userDataSlice.actions;

export default userDataSlice.reducer;