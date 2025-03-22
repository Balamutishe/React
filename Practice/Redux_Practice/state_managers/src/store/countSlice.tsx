import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
	name: "count",
	initialState: 2,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => {
			if (state < 1) return state;
			return state - 1;
		},
	},
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
