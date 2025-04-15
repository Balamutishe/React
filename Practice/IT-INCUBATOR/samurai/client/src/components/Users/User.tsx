import { FC } from "react";

import UserImg from '../../assets/149071.png'
import { TUser } from "../../api/users/types.ts";
import c from './Users.module.css'

type TUserProps = {
	user: TUser
}

export const User: FC<TUserProps> = ({ user }) => {
	return (
		<div className={ c.userContainer }>
			<div className={ c.userImgContainer }>
				<img src={ UserImg } alt="UserImg" className={ c.userImg }/>
			</div>
			<div className={ c.userContent }>
				<div className={ c.userData }>
					<h3>{ user.username }</h3>
					<p>User status</p>
				</div>
				<div className={ c.userActions }>
					<button>Follow</button>
				</div>
			</div>
		</div>
	)
}