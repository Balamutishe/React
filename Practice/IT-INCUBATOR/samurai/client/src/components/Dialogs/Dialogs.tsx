import { ChatsView } from "./Chats/ChatsView.tsx";
import c from "./Dialogs.module.css";

const Dialogs = () => {
		return (
			<div className={ c.dialogs }>
					<ChatsView/>
			</div>
		);
};

export default Dialogs;