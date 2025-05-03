import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { DialogsForm } from "../DialogsForm/DialogsForm.tsx";

import { ChatItem } from "./ChatItem.tsx";
import c from "./Chats.module.css";

export const Chats = () => {
		const chatsData = useSelector(
			(state: RootState) => state.dialogsData.chatsData);
		
		return (
			<div className={ c.chats }>
					<div className={ c.chatsContent }>
							<h2 className={ c.title }>Chats</h2>
							<ul className={ c.list }>
									{ chatsData.chats.length !== 0 ?
										chatsData.chats.map((chat) => (
											<li className={ c.listItem } key={ chat._id }>
													<ChatItem chat={ chat }/>
											</li>
										)) : (<div>Список пуст</div>) }
							</ul>
					</div>
					<div className={ c.formContainer }>
							<DialogsForm
								variant={ "chatsForm" } formText={ chatsData.chatText }
							/>
					</div>
			</div>
		);
};