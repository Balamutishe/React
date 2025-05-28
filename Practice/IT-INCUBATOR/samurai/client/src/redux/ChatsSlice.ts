import { createSlice } from "@reduxjs/toolkit";
import { TChatsList } from "../api/chats/types.ts";

interface IInitialState {
		chats: TChatsList,
		chatText: string,
		activeChatId: string,
}

const initialState: IInitialState = {
		chats: [],
		chatText: "",
		activeChatId: "",
};

const chatsSlice = createSlice({
		name: "chatsData",
		initialState: initialState,
		reducers: {
				setChatText: (state, action) => {
						state.chatText = action.payload;
				},
				setActiveChatId: (state, action) => {
						state.activeChatId = action.payload;
				},
				setChats: (state, action) => {
						state.chats = action.payload;
						state.chats.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
						state.activeChatId = state.chats[0]._id;
				},
				addChat: (state, action) => {
						state.chats = state.chats.concat(action.payload);
						state.chatText = "";
				},
				deleteChat: (state, action) => {
						state.chats =
							state.chats.filter(
								(chat) => chat._id !== action.payload);
				},
		},
});

export default chatsSlice.reducer;

export const {
		setChats,
		setChatText,
		addChat, deleteChat,
} = chatsSlice.actions;