import { FC } from "react";

import { Link } from "react-router";
import { TUsersList } from "../../api/users/types.ts";
import { User } from "./User.tsx";
import c from "./Users.module.css";

type TUsersProps = {
		users: TUsersList,
		pageCount: number,
		handleSetPaginationCount: (pageCount: number) => number[];
		handleDefineUserSubscription: (id: string) => boolean,
		handleUserSubscriptionUpdate: (subscriptionId: string) => void,
}

export const Users: FC<TUsersProps> = ({
		users, pageCount, handleSetPaginationCount, handleDefineUserSubscription,
		handleUserSubscriptionUpdate,
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
					<div className={ c.paginationContainer }>
							{ handleSetPaginationCount(pageCount).map((number) => (
								<Link key={ crypto.randomUUID() } to={ `/users/${ number }` }>
										{ number }
								</Link>
							)) }
					</div>
			</div>
		);
};