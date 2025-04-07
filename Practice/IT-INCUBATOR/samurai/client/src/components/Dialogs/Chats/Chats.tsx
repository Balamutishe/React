import { useSelector } from "react-redux";

import { ChatItem } from "./ChatItem.tsx";
import { ChatsForm } from "./ChatsForm.tsx";
import { RootState } from "../../../redux";
import { TChatsList } from "../../../api/chats/types.ts";
import c from './Chats.module.css'


export const Chats = () => {
	const chats: TChatsList = useSelector(
		(state: RootState) => state.dialogsData.chats)

	return (
		<div className={ c.chats }>
			<div className={ c.chatsContent }>
				<h2 className={ c.title }>Chats</h2>
				<ul className={ c.list }>
					{ chats.length !== 0 ? chats.map((chat) => (
						<li className={ c.listItem } key={ chat._id }>
							<ChatItem chat={ chat }/>
						</li>
					)) : (<div>Список пуст</div>) }
				</ul>
			</div>
			<div className={ c.formContainer }>
				<ChatsForm/>
			</div>
		</div>
	)
}