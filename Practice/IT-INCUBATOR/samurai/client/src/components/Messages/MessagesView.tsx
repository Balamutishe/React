import { useParams } from "react-router";
import { useQueryGetAllMessages } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const { chatId, page } = useParams();
		const queryMessages = useQueryGetAllMessages(chatId, page || "1");
		
		switch (queryMessages.status) {
				case "success":
						return <Messages messagesData={ queryMessages.data }/>;
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