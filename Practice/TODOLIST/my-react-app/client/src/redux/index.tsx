import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from "./UserDataSlice";

const store = configureStore({
  reducer: {
    userData: UserDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
