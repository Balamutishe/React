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
		},
		setChatText: (state, action) => {
			state.chatText = action.payload
		},
		setChats: (state, action) => {
			state.chats = action.payload
		},
		addChat: (state, action) => {
			state.chats = state.chats.concat(action.payload)
			state.chatText = ''
		},
		deleteChat: (state, action) => {
			state.chats =
				state.chats.filter((chat: TChat) => chat._id !== action.payload)
		},
		setMessageText: (state, action) => {
			state.messageText = action.payload
			return state
		},
		setMessages: (state, action) => {
			state.messages = action.payload
		},
		addMessage: (state, action) => {
			state.messages = state.messages.concat(action.payload)
			state.messageText = ''
		},
		deleteMessage: (state, action) => {
			state.messages = state.messages.filter(
				(message: TMessage) => message._id !== action.payload)
		}
	}
})

export default dialogsSlice.reducer;