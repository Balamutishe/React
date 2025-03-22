import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	name: "theme",
	initialState: "white",
	reducers: {
		toggleTheme: (state, action) => (state = action.payload),
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
