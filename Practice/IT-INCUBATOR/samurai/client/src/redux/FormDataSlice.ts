import { createSlice } from "@reduxjs/toolkit";

export interface IInitialStateFormData {
		formText: {
				postText: string,
				messageText: string,
				chatText: string,
		};
}

const initialState: IInitialStateFormData = {
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