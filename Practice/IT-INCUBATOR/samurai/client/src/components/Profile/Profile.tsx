import { PostsView } from "./Posts/PostsView.tsx";
import { UserDataView } from "./UserData/UserDataView.tsx";
import c from "./Profile.module.css";

export const Profile = () => {
		return (
			<div className={ c.profile }>
					<UserDataView/>
					<PostsView/>
			</div>
		);
};