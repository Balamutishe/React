import { configureStore } from "@reduxjs/toolkit";
import searchValueReducer from "./SearchValueSlice";

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
