import { createSlice } from "@reduxjs/toolkit";
import { TChatsList } from "../api/chats/types.ts";

interface IInitialState {
		chats: TChatsList;
		activeChatId: string;
}

const initialState: IInitialState = {
		chats: [],
		activeChatId: "",
};

const chatsSlice = createSlice({
		name: "chatsData",
		initialState: initialState,
		reducers: {
				setActiveChatId: (state, action) => {
						state.activeChatId = action.payload;
				},
				setChats: (state, action) => {
						state.chats = action.payload;
						state.chats.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at),
						);
						state.activeChatId = state.chats[0]._id;
				},
				addChat: (state, action) => {
						state.chats = state.chats.concat(action.payload);
				},
				deleteChat: (state, action) => {
						state.chats =
							state.chats.filter((chat) => chat._id !== action.payload);
				},
		},
});

export default chatsSlice.reducer;

export const {
		setChats, addChat, deleteChat, setActiveChatId,
} = chatsSlice.actions;