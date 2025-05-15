import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
		useQueryGetOneChat,
} from "../../hooks/api/chats/useQueryGetOneChat.ts";
import { RootState } from "../../redux";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const messagesData = useSelector(
			(state: RootState) => state.messagesData);
		const activeChatId = useParams().chatId || "";
		const activePage = useParams().page || "1";
		const queryChat = useQueryGetOneChat(activeChatId,
			activePage);
		
		useEffect(() => {
				queryChat.refetch();
		}, [activeChatId, activePage]);
		
		return <Messages messagesData={ messagesData }/>;
};