import { configureStore } from '@reduxjs/toolkit';
import visibleReducer from './visibleSlice';
import modalTypeReducer from './modalTypeSlice';

const store = configureStore({
  reducer: {
    modalVisible: visibleReducer,
    modalType: modalTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
