import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { List } from "../../List/List.tsx";
import { DialogsForm } from "../DialogsForm/DialogsForm.tsx";
import c from "./Chats.module.css";

export const Chats = () => {
		const chatsData = useSelector(
			(state: RootState) => state.dialogsData.chatsData);
		
		return (
			<div className={ c.chats }>
					<div className={ c.chatsContent }>
							<h2 className={ c.title }>Chats</h2>
							<List list={ chatsData.chats }/>
					</div>
					<div className={ c.formContainer }>
							<DialogsForm
								variant={ "chatsForm" } formText={ chatsData.chatText }
							/>
					</div>
			</div>
		);
};