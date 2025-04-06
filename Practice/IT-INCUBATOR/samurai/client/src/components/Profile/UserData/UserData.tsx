import { useSelector } from "react-redux";

import { RootState } from "../../../redux";
import c from './UserData.module.css'

export const UserData = () => {
	const { username, userImg } = useSelector(
		(state: RootState) => state.profileData.user)

	return (
		<div className={ c.userData }>
			<img src={ userImg } alt='UserImg' className={ c.userImg }/>
			<div className={ c.userDesc }>
				<div>{ username !== '' ? username :
					'Выберите пользователя' }</div>
				{ username !== '' && <div>
					<div>UserDescription</div>
					<div>UserDescription</div>
					<div>UserDescription</div>
					<div>UserDescription</div>
				</div> }
			</div>
		</div>
	)
}