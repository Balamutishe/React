import { createSlice } from '@reduxjs/toolkit';

const modalTypeSlice = createSlice({
  name: 'modalType',
  initialState: 'modalRegister',
  reducers: {
    toggleModalType: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { toggleModalType } = modalTypeSlice.actions;

export default modalTypeSlice.reducer;
