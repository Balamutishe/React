import type { TUser } from "@entities/User";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: TUser | null;
  authFormType: "register" | "login";
  accessToken: string | undefined;
}
const initialState: IInitialState = {
  user: null,
  authFormType: "login",
  accessToken: undefined,
};

const AuthState = createSlice({
  name: "authState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setAuthFormType: (state, action) => {
      state.authFormType = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setToken, setAuthFormType, logout } = AuthState.actions;
export const AuthReducer = AuthState.reducer;
