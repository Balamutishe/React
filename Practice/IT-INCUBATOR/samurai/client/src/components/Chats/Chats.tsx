import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Chats.module.css";

export const Chats = () => {
		const chatsData = useSelector(
			(state: RootState) => state.dialogsData.chatsData);
		
		return (
			<div className={ c.chats }>
					<div className={ c.chatsContent }>
							<div className={ c.header }>
									<h2 className={ c.title }>Chats</h2>
							</div>
							<List list={ chatsData.chats }/>
					</div>
					<div className={ c.formContainer }>
							<Form
								variant={ "chatsForm" } formText={ chatsData.chatText }
							/>
					</div>
			</div>
		);
};