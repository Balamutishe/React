import { useSelector } from "react-redux";

import { PostsView } from "./Posts/PostsView.tsx";
import { UserDataView } from "./UserData/UserDataView.tsx";
import { RootState } from "../../redux";
import c from './Profile.module.css'

export const Profile = () => {
	const userId = useSelector((state: RootState) => state.profileData.user._id)

	return (
		<div className={ c.profile }>
			{ userId !== '' ? (<>
				<UserDataView/>
				<PostsView/>
			</>) : (
				<div>Выберите пользователя</div>
			) }
		</div>
	)

}