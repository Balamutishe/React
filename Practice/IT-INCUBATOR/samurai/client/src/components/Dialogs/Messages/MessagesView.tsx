import { useSelector } from "react-redux";

import { Messages } from "./Messages.tsx";
import { RootState } from "../../../redux";
import { useQueryGetAllMessages } from "../../../hooks/api";

export const MessagesView = () => {
		const userId = useSelector(
			(state: RootState) => state.profileData.user._id);
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		const queryMessages = useQueryGetAllMessages(chatId);
		
		const messagesList = useSelector(
			(state: RootState) => state.dialogsData.messagesData.messages.messagesList);
		
		switch (queryMessages.status) {
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryMessages.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <Messages messages={ messagesList } userId={ userId }/>;
		}
};