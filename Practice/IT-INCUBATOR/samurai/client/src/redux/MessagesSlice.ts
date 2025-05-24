import { createSlice } from "@reduxjs/toolkit";
import { TMessagesList } from "../api/messages/types.ts";

interface IInitialState {
		queryStatus: string
		messages: {
				messagesList: TMessagesList,
				pageCount: number,
		},
		messageText: string,
}

const initialState: IInitialState = {
		queryStatus: "",
		messages: {
				messagesList: [],
				pageCount: 0,
		},
		messageText: "",
};

const messagesSlice = createSlice({
		name: "messagesData",
		initialState: initialState,
		reducers: {
				setQueryStatus(state, action) {
						state.queryStatus = action.payload;
				},
				setMessageText: (state, action) => {
						state.messageText = action.payload;
				},
				setMessages: (state, action) => {
						state.messages = action.payload;
						state.messages.messagesList.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
				},
		},
});

export default messagesSlice.reducer;

export const {
		setMessageText, setMessages, setQueryStatus,
} = messagesSlice.actions;