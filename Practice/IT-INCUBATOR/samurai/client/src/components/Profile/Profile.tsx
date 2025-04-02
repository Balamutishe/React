import { useSelector } from "react-redux";

import { RootState } from "../../redux";
import { UserData } from "./UserData/UserData.tsx";
import c from './Profile.module.css'
import { FC } from "react";
import { PostsView } from "./Posts/PostsView.tsx";

type TProfileProps = {
	authState: boolean
}

export const Profile: FC<TProfileProps> = ({ authState }) => {
	const { username, userImg } = useSelector(
		(state: RootState) => state.userData)

	return (
		<div className={ c.profile }>
			{ authState ? (<>
				<UserData username={ username } userImg={ userImg }/>
				<PostsView/>
			</>) : (
				<div>Главная страница</div>
			) }
		</div>
	)

}