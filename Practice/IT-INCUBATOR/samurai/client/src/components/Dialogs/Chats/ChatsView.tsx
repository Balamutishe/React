import { Chats } from "./Chats.tsx";
import { useQueryGetAllChats } from "../../../hooks/api";

export const ChatsView = () => {
	const { data, status, refetch } = useQueryGetAllChats()

	switch (status) {
		case "success":
			return (
				<Chats chats={ data ? data : [] } refetch={ refetch }/>
			)
		case "error":
			return (
				<div>
					<p>
						Произошла ошибка получения данных
					</p>
					<button onClick={ () => refetch() }>
						Повторить запрос
					</button>
				</div>
			)
	}
}