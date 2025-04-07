import { createSlice } from "@reduxjs/toolkit";
import { TChat } from "../api/chats/types.ts";
import { TMessage } from "../api/messages/types.ts";

const dialogsSlice = createSlice({
	name: 'dialogsData',
	initialState:
		{
			activeChatId: '',
			chatText: '',
			messageText: '',
			chats: [],
			messages: [],
		},
	reducers: {
		setActiveChatId: (state, action) => {
			state.activeChatId = action.payload
			return state
		},
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
		},
		setMessageText: (state, action) => {
			state.messageText = action.payload;
			return state;
		},
		setMessages: (state, action) => {
			state.messages = action.payload;
			return state;
		},
		addMessage: (state, action) => {
			state.messages = state.messages.concat(action.payload);
			return state;
		},
		deleteMessage: (state, action) => {
			state.messages = state.messages.filter(
				(message: TMessage) => message._id !== action.payload)
			return state;
		}
	}
})

export default dialogsSlice.reducer;