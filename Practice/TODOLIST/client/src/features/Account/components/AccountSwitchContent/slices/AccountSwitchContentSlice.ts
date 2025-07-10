import { createSlice } from "@reduxjs/toolkit";

interface IAccountSwitchContent {
  accountContentType: "info" | "settings";
}
const initialState: IAccountSwitchContent = {
  accountContentType: "info",
};

const AccountSwitchContent = createSlice({
  name: "accountContent",
  initialState,
  reducers: {
    setAccountContent: (state, action) => {
      state.accountContentType = action.payload;
    },
  },
});

export const { setAccountContent } = AccountSwitchContent.actions;
export default AccountSwitchContent.reducer;
