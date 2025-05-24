import { useQueryGetAllChats } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import { Chats } from "./Chats.tsx";

export const ChatsView = () => {
		const queryChats = useQueryGetAllChats();
		
		switch (queryChats.status) {
				case "success":
						return <>
								<Chats chats={ queryChats.data }/>
						</>;
				case "pending":
						return <Loader/>;
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryChats.refetch() }>Повторить
										запрос</button>
						</div>;
				
		}
};