import PostsContainer from "../../components/Posts/PostsContainer.tsx";
import ProfileContainer from "../../components/UserData/ProfileContainer.tsx";
import c from "./Profile.module.css";

const ProfilePage = () => {
		return (
			<div className={ c.profile }>
					<ProfileContainer/>
					<PostsContainer/>
			</div>
		
		);
};

export default ProfilePage;