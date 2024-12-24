import { createSlice } from '@reduxjs/toolkit';

const visibleSlice = createSlice({
  name: 'modalVisible',
  initialState: false,
  reducers: {
    toggleVisible: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { toggleVisible } = visibleSlice.actions;

export default visibleSlice.reducer;
