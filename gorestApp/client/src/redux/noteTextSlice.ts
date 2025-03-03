import { createSlice } from "@reduxjs/toolkit";

const noteTextSlice = createSlice({
  name: "noteText",
  initialState: "",
  reducers: {
    setNoteText: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { setNoteText } = noteTextSlice.actions;

export default noteTextSlice.reducer;
