import { createSlice } from "@reduxjs/toolkit";

interface SearchTasksState {
  searchTask: string;
}
const initialState: SearchTasksState = {
  searchTask: "",
};

const searchTasksSlice = createSlice({
  name: "searchTasks",
  initialState,
  reducers: {
    setSearchTask: (state, action) => {
      state.searchTask = action.payload;
    },
  },
});

export const { setSearchTask } = searchTasksSlice.actions;
export default searchTasksSlice.reducer;
