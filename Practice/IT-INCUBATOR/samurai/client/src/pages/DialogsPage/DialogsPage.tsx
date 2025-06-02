import { FetchChats } from "../../components/Chats/FetchChats.tsx";
import { FetchMessages } from "../../components/Messages/FetchMessages.tsx";
import c from "./DialogsPage.module.css";

const DialogsPage = () => {
		return (
			<div className={ c.dialogs }>
					<FetchChats/>
					<FetchMessages/>
			</div>
		);
};

export default DialogsPage;