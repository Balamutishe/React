import { useDispatch } from "react-redux";

import { PostsView } from "./Posts/PostsView.tsx";
import { UserDataView } from "./UserData/UserDataView.tsx";
import { useQueryMe } from "../../hooks/api";
import { AuthForm } from "../Auth/AuthForm.tsx";
import c from "./Profile.module.css";
import { setProfile } from "../../redux/ProfileSlice.ts";

export const Profile = () => {
		const dispatch = useDispatch();
		const queryUser = useQueryMe();
		
		if (queryUser.status === "success") {
				dispatch(setProfile(queryUser.data));
		}
		
		switch (queryUser.status) {
				case "success":
						return (
							<div className={ c.profile }>
									<UserDataView/>
									<PostsView/>
							</div>
						);
				case "error":
						return (
							<AuthForm/>
						);
		}
};