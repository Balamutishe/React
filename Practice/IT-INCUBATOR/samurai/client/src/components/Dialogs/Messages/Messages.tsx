import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
		useQueryGetOneChat,
} from "../../../hooks/api/chats/useQueryGetOneChat.ts";

import { RootState } from "../../../redux";
import { List } from "../../List/List.tsx";
import { Pagination } from "../../Pagination/Pagination.tsx";
import { DialogsForm } from "../DialogsForm/DialogsForm.tsx";
import c from "./Messages.module.css";

export const Messages = () => {
		const activeChatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		const messagesData = useSelector(
			(state: RootState) => state.dialogsData.messagesData);
		const queryChat = useQueryGetOneChat(activeChatId,
			messagesData.messagePage.toString());
		
		useEffect(() => {
				queryChat.refetch();
		}, [messagesData.messagePage]);
		
		return (
			<div className={ c.messages }>
					<div>
							<div className={ c.header }>
									<h2 className={ c.title }>Messages</h2>
									<Pagination
										pageCount={ messagesData.messages.pageCount }
										variant={ "messages" }
									/>
							</div>
							<List list={ messagesData.messages.messagesList }/>
					</div>
					<DialogsForm
						variant={ "messagesForm" } formText={ messagesData.messageText }
					/>
			</div>
		);
};