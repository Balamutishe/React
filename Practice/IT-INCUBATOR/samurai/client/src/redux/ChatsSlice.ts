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
				setChats: (state, action) => {
						state.chats = action.payload;
						state.chats.sort(
							(a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
						state.chatText = "";
						
						if (state.activeChatId === "") {
								state.activeChatId = state.chats[0]._id;
						}
				},
				setActiveChatId: (state, action) => {
						state.activeChatId = action.payload;
				},
		},
});

export default chatsSlice.reducer;

export const {
		setChats,
		setChatText,
		setActiveChatId,
} = chatsSlice.actions;