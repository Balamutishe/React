import ChatsContainer from "../../components/Chats/ChatsContainer.tsx";
import MessagesContainer from "../../components/Messages/MessagesContainer.tsx";
import c from "./DialogsPage.module.css";

const DialogsPage = () => {
		return (
			<div className={ c.dialogs }>
					<ChatsContainer/>
					<MessagesContainer/>
			</div>
		);
};

export default DialogsPage;