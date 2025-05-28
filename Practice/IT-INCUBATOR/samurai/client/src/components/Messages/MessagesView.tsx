import { useParams } from "react-router";
import { useQueryGetAllMessages } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import MessagesContainer from "./MessagesContainer.tsx";

export const MessagesView = () => {
		const { chatId, page } = useParams();
		const queryMessages = useQueryGetAllMessages(chatId, page || "1");
		
		switch (queryMessages.status) {
				case "success":
						return <MessagesContainer/>;
				case "pending":
						return <Loader/>;
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryMessages.refetch() }>
										Повторить запрос
								</button>
						</div>;
		}
};