import { FC } from "react";
import { useSelector } from "react-redux";
import { TChatsList } from "../../api/chats/types.ts";
import { useMutateChatAdd } from "../../hooks/api";
import { RootState } from "../../redux";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Chats.module.css";

type TChatsProps = {
		chats: TChatsList
}

export const Chats: FC<TChatsProps> = ({ chats }) => {
		const chatText = useSelector(
			(state: RootState) => state.formData.formText.chatText);
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
								addItemFunc={ () => addChat.mutate() }
							/>
					</div>
			</div>
		);
};