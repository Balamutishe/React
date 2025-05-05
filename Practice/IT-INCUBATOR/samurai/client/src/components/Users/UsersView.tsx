import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useQueryGetAllUsers } from "../../hooks/api";
import { RootState } from "../../redux";
import { Users } from "./Users.tsx";


const UsersView = () => {
		const usersData = useSelector(
			(state: RootState) => state.usersData.usersData);
		const queryUsersGet = useQueryGetAllUsers(usersData.usersPage);
		
		useEffect(() => {
				queryUsersGet.refetch();
		}, [usersData.usersPage]);
		
		switch (queryUsersGet.status) {
				case "error":
						return <div>
								Произошла ошибка при запросе
								<button onClick={ () => queryUsersGet.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <div>
								<Users users={ usersData.users }/>
						</div>;
		}
};

export default UsersView;