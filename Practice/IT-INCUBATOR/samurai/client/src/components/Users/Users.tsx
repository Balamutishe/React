import { FC } from "react";

import { Link } from "react-router";
import { TUsersList } from "../../api/users/types.ts";
import { User } from "./User.tsx";
import c from "./Users.module.css";

type TUsersProps = {
		usersData: {
				usersList: TUsersList,
				pageCount: number,
		}
		handlersUsersActions: {
				defineUserSubscription: (id: string) => boolean,
				setPaginationCount: (pageCount: number) => number[];
				userSubscriptionUpdate: (id: string) => void,
		}
}

export const Users: FC<TUsersProps> = ({
		usersData, handlersUsersActions,
}) => {
		return (
			<div className={ c.users }>
					<h2 className={ c.usersTitle }>Users</h2>
					<ul className={ c.list }>
							{ usersData.usersList.map((user) => (
								<li key={ user._id } className={ c.item }>
										<User
											user={ user }
											handleUserSubscriptionUpdate={ handlersUsersActions.userSubscriptionUpdate }
											handleDefineUserSubscription={ handlersUsersActions.defineUserSubscription }
										/>
								</li>
							)) }
					</ul>
					<div className={ c.paginationContainer }>
							{ handlersUsersActions.setPaginationCount(
								usersData.pageCount).map((number) => (
								<Link key={ crypto.randomUUID() } to={ `/users/${ number }` }>
										{ number }
								</Link>
							)) }
					</div>
			</div>
		);
};