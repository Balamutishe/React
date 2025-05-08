import { ChatsView } from "../../components/Chats/ChatsView.tsx";
import c from "./DialogsPage.module.css";

const DialogsPage = () => {
		return (
			<div className={ c.dialogs }>
					<ChatsView/>
			</div>
		);
};

export default DialogsPage;