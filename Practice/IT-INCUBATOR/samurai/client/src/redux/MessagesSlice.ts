import { createSlice } from "@reduxjs/toolkit";
import { TMessagesList } from "../api/messages/types.ts";

interface IInitialState {
  messages: {
    messagesList: TMessagesList;
    pageCount: number;
  };
  messageText: string;
}

const initialState: IInitialState = {
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
    setMessageText: (state, action) => {
      state.messageText = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
      state.messages.messagesList.sort(
        (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
      );
    },
    addMessage: (state, action) => {
      state.messages.messagesList = state.messages.messagesList.concat(
        action.payload
      );
      state.messageText = "";
    },
    deleteMessage: (state, action) => {
      state.messages.messagesList = state.messages.messagesList.filter(
        (message) => message._id !== action.payload
      );
    },
  },
});

export default messagesSlice.reducer;

export const { setMessageText, setMessages, addMessage, deleteMessage } =
  messagesSlice.actions;
