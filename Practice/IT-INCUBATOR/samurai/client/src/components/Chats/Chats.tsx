import { FC } from "react";
import { useMutateChatAdd } from "../../hooks/api";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Chats.module.css";
import { TChatsProps } from "./ChatsContainer.tsx";

export const Chats: FC<TChatsProps> = ({ chats, chatText, setChatText }) => {
		const addChat = useMutateChatAdd(chatText);
		
		return (
			<div className={ c.chats }>
					<div className={ c.chatsContent }>
							<div className={ c.header }>
									<h2 className={ c.title }>Chats</h2>
							</div>
							<List list={ chats }/>
					</div>
					<div className={ c.formContainer }>
							<Form
								variant={ "chat" } formText={ chatText }
								addItemFunc={ addChat } setFormText={ setChatText }
							/>
					</div>
			</div>
		);
};