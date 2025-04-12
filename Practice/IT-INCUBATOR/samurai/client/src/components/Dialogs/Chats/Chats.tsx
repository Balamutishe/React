import { ChangeEvent, FC, FormEvent } from "react";

import { ChatItem } from "./ChatItem.tsx";
import { ChatsForm } from "./ChatsForm.tsx";
import { TChatsList } from "../../../api/chats/types.ts";
import c from './Chats.module.css'

type TChatsProps = {
	chats: TChatsList
	chatText: string
	handleChatChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handleChatAdd: (e: FormEvent<HTMLFormElement>) => void
	handleChatDelete: (id: string) => void
}

export const Chats: FC<TChatsProps> = ({
	chats, chatText, handleChatChange, handleChatAdd,
	handleChatDelete
}) => {
	return (
		<div className={ c.chats }>
			<div className={ c.chatsContent }>
				<h2 className={ c.title }>Chats</h2>
				<ul className={ c.list }>
					{ chats.length !== 0 ? chats.map((chat) => (
						<li className={ c.listItem } key={ chat._id }>
							<ChatItem
								chat={ chat } handleChatDelete={ handleChatDelete }
							/>
						</li>
					)) : (<div>Список пуст</div>) }
				</ul>
			</div>
			<div className={ c.formContainer }>
				<ChatsForm
					chatText={ chatText } handleChatChange={ handleChatChange }
					handleChatAdd={ handleChatAdd }
				/>
			</div>
		</div>
	)
}