import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
		name: "authData",
		initialState: {
				authState: "login",
				formData: {
						username: "",
						password: "",
				},
		},
		reducers: {
				setAuthState: (state, action) => {
						state.authState = action.payload;
				},
				setFormData: (state, action) => {
						state.formData = action.payload;
				},
		},
});

export default authSlice.reducer;

export const {
		setAuthState, setFormData,
} = authSlice.actions;