import { createSlice } from "@reduxjs/toolkit";

const noteDataSlice = createSlice({
  name: "noteData",
  initialState: {
    id: "",
    text: "",
    disableState: true,
  },
  reducers: {
    setNoteData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setNoteData } = noteDataSlice.actions;

export default noteDataSlice.reducer;
