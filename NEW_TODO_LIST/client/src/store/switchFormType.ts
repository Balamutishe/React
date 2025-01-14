import { createSlice } from "@reduxjs/toolkit";

const switchFormTypeSlice = createSlice({
  name: "switchFormType",
  initialState: "login",
  reducers: {
    toggleFormType: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { toggleFormType } = switchFormTypeSlice.actions;

export default switchFormTypeSlice.reducer;
