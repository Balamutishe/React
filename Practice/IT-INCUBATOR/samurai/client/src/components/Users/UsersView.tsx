import { useQueryGetAllUsers } from "../../hooks/api/useQueryGetAllUsers.ts";
import { Users } from "./Users.tsx";

export const UsersView = () => {
	const { users, status, refetch } = useQueryGetAllUsers()

	switch (status) {
		case "error":
			return <div>
				Произошла ошибка при запросе
				<button onClick={ () => refetch() }>Повторить запрос</button>
			</div>
		case "success":
			return <div>
				<Users users={ users }/>
			</div>
	}
}