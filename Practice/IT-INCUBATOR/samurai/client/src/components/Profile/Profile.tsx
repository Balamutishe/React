import { PostsView } from "./Posts/PostsView.tsx";
import c from "./Profile.module.css";
import { UserDataView } from "./UserData/UserDataView.tsx";

const Profile = () => {
		return (
			<div className={ c.profile }>
					<UserDataView/>
					<PostsView/>
			</div>
		
		);
};

export default Profile;