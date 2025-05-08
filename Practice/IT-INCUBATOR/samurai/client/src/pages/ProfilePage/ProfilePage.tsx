import { PostsView } from "../../components/Posts/PostsView.tsx";
import { UserDataView } from "../../components/UserData/UserDataView.tsx";
import c from "./Profile.module.css";

const ProfilePage = () => {
		return (
			<div className={ c.profile }>
					<UserDataView/>
					<PostsView/>
			</div>
		
		);
};

export default ProfilePage;