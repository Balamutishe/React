import { createSlice } from "@reduxjs/toolkit";
import { TUsersList } from "../api/users/types.ts";

interface IInitialState {
		usersData: {
				users: {
						usersList: TUsersList,
						pageCount: number,
				}
				usersPage: number,
		},
}

const initialState: IInitialState = {
		usersData: {
				users: {
						usersList: [],
						pageCount: 1,
				},
				usersPage: 1,
		},
};

const usersSlice = createSlice({
		name: "usersData",
		initialState: initialState,
		reducers: {
				setUsers: (state, action) => {
						state.usersData.users = action.payload;
				},
				setUsersPage: (state, action) => {
						state.usersData.usersPage = action.payload;
				},
		},
});

export const {
		setUsers, setUsersPage,
} = usersSlice.actions;

export default usersSlice.reducer;