import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useQueryGetAllMessages } from "../../hooks/api";
import { RootState } from "../../redux";
import { Loader } from "../Loader/Loader.tsx";

import { Messages } from "./Messages.tsx";

export const MessagesView = () => {
		const messagesData = useSelector(
			(state: RootState) => state.messagesData);
		const { chatId, page } = useParams();
		const queryMessages = useQueryGetAllMessages(chatId, page || "1");
		
		switch (queryMessages.status) {
				case "success":
						return <Messages
							messagesData={ queryMessages.data }
							messageText={ messagesData.messageText }
						/>;
				case "pending":
						return <Loader/>;
				case "error":
						return (
							<div>Error: ${ queryMessages.error.message }</div>
						);
		}
		
		
};