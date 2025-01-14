import { configureStore } from "@reduxjs/toolkit";
import switchFormTypeReducer from "./switchFormType";

const store = configureStore({
  reducer: {
    switchFormType: switchFormTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
