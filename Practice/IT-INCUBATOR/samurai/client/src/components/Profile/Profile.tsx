import { UserData } from "./UserData/UserData.tsx";
import c from './Profile.module.css'
import { FC } from "react";
import { Posts } from "./Posts/Posts.tsx";

type TProfileProps = {
	authState: boolean
}

export const Profile: FC<TProfileProps> = ({ authState }) => {
	return (
		<div className={ c.profile }>
			{ authState ? (<>
				<UserData/>
				<Posts/>
			</>) : (
				<div>Главная страница</div>
			) }
		</div>
	)

}