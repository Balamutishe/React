import { configureStore } from "@reduxjs/toolkit";
import searchTasksReducer from "./SearchTasksSlice";

const store = configureStore({
  reducer: {
    searchTasks: searchTasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
