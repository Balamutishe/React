import { configureStore } from "@reduxjs/toolkit";
import noteDataReducer from "./noteDataSlice";

const store = configureStore({
  reducer: {
    noteData: noteDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
