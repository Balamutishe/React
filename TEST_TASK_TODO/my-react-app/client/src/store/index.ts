import { configureStore } from "@reduxjs/toolkit";
import switchFormTypeReducer from "./switchFormType";
import userInfoSetReducer from "./userInfo";

const store = configureStore({
  reducer: {
    switchFormType: switchFormTypeReducer,
    userInfo: userInfoSetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
