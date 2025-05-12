import { useSelector } from "react-redux";
import { useQueryGetAllChats } from "../../hooks/api";
import { RootState } from "../../redux";
import { Loader } from "../Loader/Loader.tsx";
import { Messages } from "../Messages/Messages.tsx";
import { Chats } from "./Chats.tsx";

export const ChatsView = () => {
		const queryChats = useQueryGetAllChats();
		const dialogsData = useSelector((state: RootState) => state.dialogsData);
		
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
								<Chats
									chats={ dialogsData.chatsData.chats }
									chatText={ dialogsData.chatsData.chatText }
								/>
								<Messages
									messagesData={ dialogsData.messagesData }
								/>
						</>;
		}
};