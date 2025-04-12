import { FC } from "react";

import c from './Profile.module.css'
import { PostsView } from "./Posts/PostsView.tsx";
import { UserDataView } from "./UserData/UserDataView.tsx";

type TProfileProps = {
	authState: boolean
}

export const Profile: FC<TProfileProps> = ({ authState }) => {
	return (
		<div className={ c.profile }>
			{ authState ? (<>
				<UserDataView/>
				<PostsView/>
			</>) : (
				<div>Главная страница</div>
			) }
		</div>
	)

}