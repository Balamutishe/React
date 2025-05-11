import { createSlice } from "@reduxjs/toolkit";
import { TChat, TChatsList } from "../api/chats/types.ts";
import { TMessage, TMessagesList } from "../api/messages/types.ts";

interface IInitialState {
		chatsData: {
				chats: TChatsList,
				chatText: string,
		},
		messagesData: {
				messages: {
						messagesList: TMessagesList,
						pageCount: number,
				},
				messageText: string,
				messagePage: number,
		}
}

const initialState: IInitialState = {
		chatsData: {
				chats: [],
				chatText: "",
		},
		messagesData: {
				messages: {
						messagesList: [],
						pageCount: 0,
				},
				messageText: "",
				messagePage: 1,
		},
};

const dialogsSlice = createSlice({
		name: "dialogsData",
		initialState: initialState,
		reducers: {
				setActiveMessagePage: (state, action) => {
						state.messagesData.messagePage = action.payload;
				},
				setChatText: (state, action) => {
						state.chatsData.chatText = action.payload;
				},
				setChats: (state, action) => {
						state.chatsData.chats = action.payload;
						state.chatsData.chats.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
				},
				setActiveChatId: (state, action) => {
						const activeChat = state.chatsData.chats.find(
							(chat) => chat._id === action.payload);
						
						if (activeChat) {
								state.messagesData.messages.messagesList =
									activeChat.messagesList;
						} else {
								state.messagesData.messages.messagesList = [];
						}
				},
				addChat: (state, action) => {
						state.chatsData.chats =
							state.chatsData.chats.concat(action.payload);
						state.chatsData.chatText = "";
				},
				deleteChat: (state, action) => {
						state.chatsData.chats =
							state.chatsData.chats.filter(
								(chat: TChat) => chat._id !== action.payload);
				},
				setMessageText: (state, action) => {
						state.messagesData.messageText = action.payload;
				},
				setMessages: (state, action) => {
						state.messagesData.messages = action.payload;
						state.messagesData.messages.messagesList.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
				},
				addMessage: (state, action) => {
						state.messagesData.messages.messagesList =
							state.messagesData.messages.messagesList.concat(action.payload);
						state.messagesData.messageText = "";
				},
				deleteMessage: (state, action) => {
						state.messagesData.messages.messagesList =
							state.messagesData.messages.messagesList.filter(
								(message: TMessage) => message._id !== action.payload);
				},
		},
});

export default dialogsSlice.reducer;

export const {
		setActiveMessagePage,
		setChats, setActiveChatId, addChat, deleteChat,
		setChatText,
		deleteMessage,
		setMessageText, setMessages, addMessage,
} = dialogsSlice.actions;