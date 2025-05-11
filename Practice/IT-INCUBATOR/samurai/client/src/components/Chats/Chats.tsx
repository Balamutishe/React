import { FC } from "react";
import { TChatsList } from "../../api/chats/types.ts";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Chats.module.css";

type TChatsProps = {
		chats: TChatsList
		chatText: string
}

export const Chats: FC<TChatsProps> = ({ chats, chatText }) => {
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
								variant={ "chatsForm" } formText={ chatText }
							/>
					</div>
			</div>
		);
};