import { useSelector } from "react-redux";

import { ChatsView } from "./Chats/ChatsView.tsx";
import { MessagesView } from "./Messages/MessagesView.tsx";
import { RootState } from "../../redux";
import c from "./Dialogs.module.css";

export const Dialogs = () => {
		const chatId = useSelector((state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		return (
			<div className={ c.dialogs }>
					<ChatsView/>
					{ chatId !== "" ?
						<MessagesView/> :
						<div style={ { padding: "0.5rem 1rem" } }>Выберите чат для отправки сообщений</div> }
			</div>
		);
};