import type { TUser } from "@entities/User";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: TUser | null;
  authFormType: "register" | "login";
  authStatus: boolean;
  accessToken: string | undefined;
}
const initialState: IInitialState = {
  user: null,
  authStatus: false,
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
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    setAuthFormType: (state, action) => {
      state.authFormType = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setToken, setAuthStatus, setAuthFormType, logout } =
  AuthState.actions;
export const AuthReducer = AuthState.reducer;
