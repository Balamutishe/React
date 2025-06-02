import { FetchPosts } from "../../components/Posts/FetchPosts.tsx";
import ProfileContainer from "../../components/UserData/ProfileContainer.tsx";
import c from "./Profile.module.css";

const ProfilePage = () => {
		return (
			<div className={ c.profile }>
					<ProfileContainer/>
					<FetchPosts/>
			</div>
		
		);
};

export default ProfilePage;