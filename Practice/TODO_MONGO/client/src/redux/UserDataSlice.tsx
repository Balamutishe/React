import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "userData",
  initialState: {
    username: "",
    authStatusUser: "",
  },
  reducers: {
    setUserData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUserData } = UserDataSlice.actions;

export default UserDataSlice.reducer;
