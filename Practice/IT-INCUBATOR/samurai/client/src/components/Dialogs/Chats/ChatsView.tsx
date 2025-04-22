import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutateChatAdd, useMutateChatDelete, useQueryGetAllChats } from "../../../hooks/api";
import { Chats } from "./Chats.tsx";
import { RootState } from "../../../redux";
import { setActiveChatId, setChatText, setDeleteChatId } from "../../../redux/DialogsSlice.ts";

export const ChatsView = () => {
		const dispatch = useDispatch();
		const chatText = useSelector(
			(state: RootState) => state.dialogsData.chatsData.chatText);
		
		const queryChats = useQueryGetAllChats();
		const addChat = useMutateChatAdd(chatText);
		const deleteChat = useMutateChatDelete();
		
		const handleChatChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setChatText(e.target.value));
		};
		const handleChatAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addChat();
		};
		const handleChatDelete = (id: string) => {
				dispatch(setDeleteChatId(id));
				deleteChat();
		};
		const handleSetChatActiveId = async (id: string) => {
				dispatch(setActiveChatId(id));
		};
		
		switch (queryChats.status) {
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryChats.refetch() }>Повторить запрос</button>
						</div>;
				case "success":
						return <Chats
							chats={ queryChats.data } chatText={ chatText }
							handleChatChange={ handleChatChange }
							handleChatAdd={ handleChatAdd }
							handleChatDelete={ handleChatDelete }
							handleSetChatActiveId={ handleSetChatActiveId }
						/>;
		}
};