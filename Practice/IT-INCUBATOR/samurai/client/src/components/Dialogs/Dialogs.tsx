import { ChatsView } from "./Chats/ChatsView.tsx";
import { MessagesView } from "./Messages/MessagesView.tsx";
import c from "./Dialogs.module.css";

export const Dialogs = () => {
		return (
			<div className={ c.dialogs }>
					<ChatsView/>
					<MessagesView/>
			</div>
		);
};