import { ChatsView } from "./Chats/ChatsView.tsx";
import { MessagesView } from "./Messages/MessagesView.tsx";
import c from './Dialogs.module.css'
import { useParams } from "react-router";

export const Dialogs = () => {
	const params = useParams()
	const chatId = params.chatId ? params.chatId : ''

	return (
		<div className={ c.dialogs }>
			<ChatsView/>
			{ chatId && <MessagesView/> }
		</div>
	)
}