import { useQueryGetAllChats } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import { MessagesView } from "../Messages/MessagesView.tsx";
import { Chats } from "./Chats.tsx";

export const ChatsView = () => {
		const queryChats = useQueryGetAllChats();
		
		switch (queryChats.status) {
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryChats.refetch() }>Повторить
										запрос</button>
						</div>;
				case "pending":
						return <Loader/>;
				case "success":
						return <>
								<Chats/>
								<MessagesView/>
						</>;
		}
};