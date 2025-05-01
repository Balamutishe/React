import { useSelector } from "react-redux";
import { useQueryGetAllMessages } from "../../../hooks/api";
import { RootState } from "../../../redux";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		const queryMessages = useQueryGetAllMessages(chatId);
		
		switch (queryMessages.status) {
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryMessages.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <Messages/>;
		}
};