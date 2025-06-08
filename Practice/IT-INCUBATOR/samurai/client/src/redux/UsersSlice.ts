import { createSlice } from "@reduxjs/toolkit";
import { TUsersList } from "../api/users/types.ts";

interface IInitialState {
  usersData: {
    users: {
      usersList: TUsersList;
      pageCount: number;
    };
  };
}

const initialState: IInitialState = {
  usersData: {
    users: {
      usersList: [],
      pageCount: 1,
    },
  },
};

const usersSlice = createSlice({
  name: "usersData",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersData.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
