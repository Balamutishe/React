import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    username: "",
  },
  reducers: {
    setUserData: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { setUserData } = userInfoSlice.actions;

export default userInfoSlice.reducer;
