import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../api/users/types.ts";

interface IInitialState {
		user: TUser,
		subscriptionIdUpdate: string,
}

const initialState: IInitialState = {
		user: {
				_id: "",
				username: "",
				userImg: "/src/assets/149071.png",
				subscriptions: [],
		},
		subscriptionIdUpdate: "",
};

const profileSlice = createSlice({
		name: "profileData",
		initialState: initialState,
		reducers: {
				setProfile: (state, action) => {
						state.user = action.payload;
				},
				setSubscriptionIdUpdate: (state, action) => {
						state.subscriptionIdUpdate = action.payload;
				},
		},
});

export const {
		setProfile, setSubscriptionIdUpdate,
} = profileSlice.actions;

export default profileSlice.reducer;