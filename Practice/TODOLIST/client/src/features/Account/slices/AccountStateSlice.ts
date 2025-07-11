import { createSlice } from "@reduxjs/toolkit";

interface IAccountSwitchContent {
  accountContentType: "info" | "settings";
}
const initialState: IAccountSwitchContent = {
  accountContentType: "info",
};

const AccountState = createSlice({
  name: "accountState",
  initialState,
  reducers: {
    setAccountState: (state, action) => {
      state.accountContentType = action.payload;
    },
  },
});

export const { setAccountState } = AccountState.actions;
export const AccountStateReducer = AccountState.reducer;
