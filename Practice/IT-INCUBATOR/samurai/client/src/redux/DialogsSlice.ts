import { createSlice } from "@reduxjs/toolkit";
import { TChat } from "../api/chats/types.ts";

const dialogsSlice = createSlice({
	name: 'dialogsData',
	initialState:
		{
			chatText: '',
			chats: []
		},
	reducers: {
		setChatText: (state, action) => {
			state.chatText = action.payload;
			return state;
		},
		setChats: (state, action) => {
			state.chats = action.payload;
		},
		addChat: (state, action) => {
			state.chats = state.chats.concat(action.payload);
			return state;
		},
		deleteChat: (state, action) => {
			state.chats =
				state.chats.filter((chat: TChat) => chat._id !== action.payload)
			return state;
		}
	}
})

export default dialogsSlice.reducer;