import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { useParams } from "react-router";

import { Messages } from "./Messages.tsx";
import { RootState } from "../../../redux";
import {
	useMutateMessageAdd, useMutateMessageDelete, useQueryGetAllMessages
} from "../../../hooks/api";
import {
	setDeleteMessageId,
	setMessageText
} from "../../../redux/DialogsSlice.ts";

export const MessagesView = () => {
	const dispatch = useDispatch();
	const params = useParams()

	const messageText = useSelector(
		(state: RootState) => state.dialogsData.messagesData.messageText)
	const userId = useSelector((state: RootState) => state.profileData.user._id)
	const chatId = params.chatId ? params.chatId : ''

	const { messages, status, refetch } = useQueryGetAllMessages(chatId)
	const addMessage = useMutateMessageAdd(messageText, chatId, userId, refetch)
	const deleteMessage = useMutateMessageDelete(refetch)

	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setMessageText(e.target.value))
	}
	const handleMessageAdd = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addMessage()
	}
	const handleMessageDelete = async (id: string) => {
		dispatch(setDeleteMessageId(id))
		deleteMessage()
	}

	useEffect(() => {
		refetch()
	}, [chatId, refetch])

	switch (status) {
		case "error":
			return <div>
				Ошибка при получении данных
				<button onClick={ () => refetch() }>Повторить запрос</button>
			</div>
		case "success":
			return <Messages
				messages={ messages } userId={ userId }
				messageText={ messageText }
				handleMessageChange={ handleMessageChange }
				handleMessageAdd={ handleMessageAdd }
				handleMessageDelete={ handleMessageDelete }
			/>
	}
}