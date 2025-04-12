import { createSlice } from "@reduxjs/toolkit";
import { TChat } from "../api/chats/types.ts";
import { TMessage } from "../api/messages/types.ts";

const dialogsSlice = createSlice({
	name: 'dialogsData',
	initialState:
		{
			chatsData: {
				chats: [],
				chatText: '',
				activeChatId: '',
				deleteChatId: ''
			},
			messagesData: {
				messages: [],
				messageText: '',
				deleteMessageId: ''
			}
		},
	reducers: {
		setChatText: (state, action) => {
			state.chatsData.chatText = action.payload
		},
		setChats: (state, action) => {
			state.chatsData.chats = action.payload
		},
		setDeleteChatId: (state, action) => {
			state.chatsData.deleteChatId = action.payload
		},
		setActiveChatId: (state, action) => {
			state.chatsData.activeChatId = action.payload
		},
		addChat: (state, action) => {
			state.chatsData.chats = state.chatsData.chats.concat(action.payload)
			state.chatsData.chatText = ''
		},
		deleteChat: (state, action) => {
			state.chatsData.chats =
				state.chatsData.chats.filter(
					(chat: TChat) => chat._id !== action.payload)
		},
		setMessageText: (state, action) => {
			state.messagesData.messageText = action.payload
		},
		setMessages: (state, action) => {
			state.messagesData.messages = action.payload
		},
		setDeleteMessageId: (state, action) => {
			state.messagesData.deleteMessageId = action.payload
		},
		addMessage: (state, action) => {
			state.messagesData.messages =
				state.messagesData.messages.concat(action.payload)
			state.messagesData.messageText = ''
		},
		deleteMessage: (state, action) => {
			state.messagesData.messages = state.messagesData.messages.filter(
				(message: TMessage) => message._id !== action.payload)
		}
	}
})

export default dialogsSlice.reducer;

export const {
	setChats, setDeleteChatId, setActiveChatId, addChat, deleteChat, setChatText,
	deleteMessage,
	setMessageText, setMessages, setDeleteMessageId, addMessage
} = dialogsSlice.actions;