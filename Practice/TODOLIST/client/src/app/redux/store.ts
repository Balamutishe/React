import { configureStore } from "@reduxjs/toolkit";
import searchValueReducer from "@features/Task/components/Search/slices/SearchValueSlice";
import { AuthReducer } from "@features/Auth/slices";
import { AccountStateReducer } from "@features/Account/slices";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    accountState: AccountStateReducer,
    authState: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
