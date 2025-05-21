import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { useQueryGetAllUsers } from "../../hooks/api";
import { RootState } from "../../redux";
import { Users } from "./Users.tsx";


const UsersView = () => {
		const usersData = useSelector(
			(state: RootState) => state.usersData.usersData);
		const activePage = useParams().page || "1";
		const queryUsersGet = useQueryGetAllUsers(Number(activePage));
		
		useEffect(() => {
				queryUsersGet.refetch();
		}, [activePage]);
		
		switch (queryUsersGet.status) {
				case "error":
						return <div>
								Произошла ошибка при запросе
								<button onClick={ () => queryUsersGet.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <Users users={ usersData.users }/>;
				
		}
};

export default UsersView;