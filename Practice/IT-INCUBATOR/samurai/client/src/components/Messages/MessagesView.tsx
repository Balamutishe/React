import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
		useQueryGetOneChat,
} from "../../hooks/api/chats/useQueryGetOneChat.ts";
import { RootState } from "../../redux";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const activeChatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		const messagesData = useSelector(
			(state: RootState) => state.dialogsData.messagesData);
		const queryChat = useQueryGetOneChat(activeChatId,
			messagesData.messagePage.toString());
		
		useEffect(() => {
				queryChat.refetch();
		}, [messagesData.messagePage]);
		
		return <Messages messagesData={ messagesData }/>;
};