import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
		formText: {
				postText: string,
				messageText: string,
				chatText: string,
		};
}

const initialState: IInitialState = {
		formText: {
				postText: "",
				messageText: "",
				chatText: "",
		},
};

const formDataSlice = createSlice({
		name: "formData",
		initialState: initialState,
		reducers: {
				setFormText: (state, action) => {
						state.formText = action.payload;
				},
		},
});

export const {
		setFormText,
} = formDataSlice.actions;

export default formDataSlice.reducer;