import { configureStore } from "@reduxjs/toolkit";
import noteTextReducer from "./noteTextSlice";

const store = configureStore({
  reducer: {
    noteText: noteTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
