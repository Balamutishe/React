import { configureStore } from "@reduxjs/toolkit";
import ChatsReducer from "./ChatsSlice.ts";
import MessagesReducer from "./MessagesSlice.ts";
import PostsReducer from "./PostsSlice.ts";
import ProfileReducer from "./ProfileSlice.ts";
import UsersReducer from "./UsersSlice.ts";

const store = configureStore({
  reducer: {
    profileData: ProfileReducer,
    postsData: PostsReducer,
    chatsData: ChatsReducer,
    messagesData: MessagesReducer,
    usersData: UsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
