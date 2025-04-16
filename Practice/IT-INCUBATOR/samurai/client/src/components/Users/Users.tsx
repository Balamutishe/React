import { FC } from "react";

import { TUsersList } from "../../api/users/types.ts";
import { User } from "./User.tsx";
import c from './Users.module.css'

type TUsersProps = {
	users: TUsersList,
	handleDefineUserSubscription: (id: string) => boolean,
	handleUserSubscriptionUpdate: (subscriptionId: string) => void,
}

export const Users: FC<TUsersProps> = ({
	users, handleDefineUserSubscription, handleUserSubscriptionUpdate
}) => {
	return (
		<div className={ c.users }>
			<h2 className={ c.usersTitle }>Users</h2>
			<ul className={ c.list }>
				{ users.map((user) => (
					<li key={ user._id } className={ c.item }>
						<User
							user={ user }
							handleUserSubscriptionUpdate={ handleUserSubscriptionUpdate }
							handleDefineUserSubscription={ handleDefineUserSubscription }
						/>
					</li>
				)) }
			</ul>
		</div>
	)
}