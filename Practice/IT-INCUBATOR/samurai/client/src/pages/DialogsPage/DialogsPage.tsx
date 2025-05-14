import { ChatsView } from "../../components/Chats/ChatsView.tsx";
import { MessagesView } from "../../components/Messages/MessagesView.tsx";
import c from "./DialogsPage.module.css";

const DialogsPage = () => {
		return (
			<div className={ c.dialogs }>
					<ChatsView/>
					<MessagesView/>
			</div>
		);
};

export default DialogsPage;