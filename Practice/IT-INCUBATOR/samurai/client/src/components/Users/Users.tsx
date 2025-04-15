import { FC } from "react";

import { TUsersList } from "../../api/users/types.ts";
import { User } from "./User.tsx";
import c from './Users.module.css'

type TUsersProps = {
	users: TUsersList
}

export const Users: FC<TUsersProps> = ({ users }) => {
	return (
		<div className={ c.users }>
			<h2 className={ c.usersTitle }>Users</h2>
			<ul className={ c.list }>
				{ users.map((user) => (
					<li key={ user._id } className={ c.item }>
						<User user={ user }/>
					</li>
				)) }
			</ul>
		</div>
	)
}