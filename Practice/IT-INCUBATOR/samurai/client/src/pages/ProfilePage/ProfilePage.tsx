import { PostsView } from "../../components/Posts/PostsView.tsx";
import ProfileContainer from "../../components/UserData/ProfileContainer.tsx";
import c from "./Profile.module.css";

const ProfilePage = () => {
		return (
			<div className={ c.profile }>
					<ProfileContainer/>
					<PostsView/>
			</div>
		
		);
};

export default ProfilePage;