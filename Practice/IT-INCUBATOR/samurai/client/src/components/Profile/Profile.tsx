import { PostsView } from "./Posts/PostsView.tsx";
import { UserDataView } from "./UserData/UserDataView.tsx";
import { useQueryMe } from "../../hooks/api";
import { AuthForm } from "../Auth/AuthForm.tsx";
import c from "./Profile.module.css";

export const Profile = () => {
		const queryUser = useQueryMe();
		
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