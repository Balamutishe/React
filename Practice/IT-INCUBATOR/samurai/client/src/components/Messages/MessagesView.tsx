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
		const { chatId, page } = useParams();
		const queryChat = useQueryGetOneChat(chatId || "",
			page || "1");
		
		useEffect(() => {
				queryChat.refetch();
		}, [chatId, page]);
		
		return <Messages messagesData={ messagesData }/>;
};