import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
		useQueryGetOneChat,
} from "../../hooks/api/chats/useQueryGetOneChat.ts";
import { RootState } from "../../redux";
import { Loader } from "../Loader/Loader.tsx";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const messagesData = useSelector(
			(state: RootState) => state.messagesData);
		const { chatId, page } = useParams();
		const queryChat = useQueryGetOneChat(page || "1", chatId);
		
		switch (queryChat.status) {
				case "success":
						return <Messages
							messagesData={ queryChat.data.chatMessages }
							messageText={ messagesData.messageText }
						/>;
				case "pending":
						return <Loader/>;
				case "error":
						return (
							<div>Error: ${ queryChat.error.message }</div>
						);
		}
		
		
};