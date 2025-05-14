import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
		useQueryGetOneChat,
} from "../../hooks/api/chats/useQueryGetOneChat.ts";
import { RootState } from "../../redux";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const messagesData = useSelector(
			(state: RootState) => state.messagesData);
		const activeChatId = useSelector(
			(state: RootState) => state.chatsData.activeChatId);
		const queryChat = useQueryGetOneChat(activeChatId,
			messagesData.messagePage.toString());
		
		useEffect(() => {
				queryChat.refetch();
		}, [activeChatId]);
		
		return <Messages messagesData={ messagesData }/>;
};