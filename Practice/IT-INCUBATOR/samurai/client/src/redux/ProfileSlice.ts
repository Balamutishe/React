import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../api/users/types.ts";

interface IInitialState {
  user: TUser;
  authState: boolean;
}

const initialState: IInitialState = {
  user: {
    _id: "",
    username: "",
    userImg: "/src/assets/149071.png",
    subscriptions: [],
    posts_ids: [],
    chats_ids: [],
    status: "",
  },
  authState: false,
};

const profileSlice = createSlice({
  name: "profileData",
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state.user = action.payload;
    },
    profileUpdate: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const { setProfile, profileUpdate, setAuthState } = profileSlice.actions;

export default profileSlice.reducer;
