import { createSlice } from "@reduxjs/toolkit";

interface SearchValueState {
  searchValue: string;
}
const initialState: SearchValueState = {
  searchValue: "",
};

const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;
