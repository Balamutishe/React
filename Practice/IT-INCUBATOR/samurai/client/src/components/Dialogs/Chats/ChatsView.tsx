import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	useMutateChatAdd,
	useMutateChatDelete,
	useQueryGetAllChats
} from "../../../hooks/api";
import { Chats } from "./Chats.tsx";
import { RootState } from "../../../redux";
import { setChatText, setDeleteChatId } from "../../../redux/DialogsSlice.ts";

export const ChatsView = () => {
	const dispatch = useDispatch();

	const chatText = useSelector(
		(state: RootState) => state.dialogsData.chatsData.chatText)
	const userId = useSelector((state: RootState) => state.profileData.user._id)

	const { chats, status, refetch } = useQueryGetAllChats(userId)
	const addChat = useMutateChatAdd(chatText, userId, refetch)
	const deleteChat = useMutateChatDelete(refetch)

	const handleChatChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(setChatText(e.target.value))
	}
	const handleChatAdd = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addChat()
	}
	const handleChatDelete = async (id: string) => {
		dispatch(setDeleteChatId(id))
		deleteChat()
	}

	switch (status) {
		case "error":
			return <div>
				Ошибка при получении данных
				<button onClick={ () => refetch() }>Повторить запрос</button>
			</div>
		case "success":
			return <Chats
				chats={ chats } chatText={ chatText }
				handleChatChange={ handleChatChange }
				handleChatAdd={ handleChatAdd } handleChatDelete={ handleChatDelete }
			/>
	}
}