import { FC } from "react"
import c from './UserData.module.css'

type TUserData = {
	username: string,
	userImg: string,
}

export const UserData: FC<TUserData> = ({ username, userImg }) => {
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