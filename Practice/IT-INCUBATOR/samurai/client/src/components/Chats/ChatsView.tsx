import { useQueryGetAllChats } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import ChatsContainer from "./ChatsContainer.tsx";

export const ChatsView = () => {
		const queryChats = useQueryGetAllChats();
		
		switch (queryChats.status) {
				case "success":
						return <ChatsContainer/>;
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