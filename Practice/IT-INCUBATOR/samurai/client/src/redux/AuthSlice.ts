import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
		name: "authData",
		initialState: {
				authState: "login",
				queryUserStatus: "error",
				formData: {
						username: "",
						password: "",
				},
		},
		reducers: {
				setAuthState: (state, action) => {
						state.authState = action.payload;
				},
				setQueryUserStatus: (state, action) => {
						state.queryUserStatus = action.payload;
				},
				setFormData: (state, action) => {
						state.formData = action.payload;
				},
		},
});

export default authSlice.reducer;

export const { setAuthState, setQueryUserStatus, setFormData } = authSlice.actions;