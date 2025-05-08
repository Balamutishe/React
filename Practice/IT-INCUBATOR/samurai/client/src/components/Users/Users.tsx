import { FC } from "react";
import { TUsersList } from "../../api/users/types.ts";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Users.module.css";

type TUsersProps = {
		users: {
				usersList: TUsersList,
				pageCount: number,
		}
}

export const Users: FC<TUsersProps> = ({ users }) => {
		return (
			<div className={ c.users }>
					<div className={ c.header }>
							<h2 className={ c.title }>Users</h2>
							<Pagination pageCount={ users.pageCount } variant={ "users" }/>
					</div>
					<List list={ users.usersList }/>
			</div>
		);
};