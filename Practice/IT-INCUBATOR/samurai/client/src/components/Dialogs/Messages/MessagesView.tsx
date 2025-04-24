import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useEffect } from "react";

import { Messages } from "./Messages.tsx";
import { RootState } from "../../../redux";
import {
		useMutateMessageAdd,
		useMutateMessageDelete,
		useQueryGetAllMessages,
} from "../../../hooks/api";
import {
		setDeleteMessageId,
		setMessageText,
} from "../../../redux/DialogsSlice.ts";

export const MessagesView = () => {
		const dispatch = useDispatch();
		
		const messageText = useSelector(
			(state: RootState) => state.dialogsData.messagesData.messageText);
		const userId = useSelector(
			(state: RootState) => state.profileData.user._id);
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		const queryMessages = useQueryGetAllMessages();
		const addMessage = useMutateMessageAdd(messageText);
		const deleteMessage = useMutateMessageDelete();
		
		const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setMessageText(e.target.value));
		};
		const handleMessageAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addMessage();
		};
		const handleMessageDelete = async (id: string) => {
				dispatch(setDeleteMessageId(id));
				deleteMessage();
		};
		
		useEffect(() => {
				queryMessages.refetch();
		}, [chatId, queryMessages.refetch]);
		
		switch (queryMessages.status) {
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryMessages.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <Messages
							messages={ queryMessages.data.messagesList } userId={ userId }
							messageText={ messageText }
							handleMessageChange={ handleMessageChange }
							handleMessageAdd={ handleMessageAdd }
							handleMessageDelete={ handleMessageDelete }
						/>;
		}
};