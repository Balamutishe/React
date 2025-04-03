import { FC } from 'react'
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { ChatItem } from "./ChatItem.tsx";
import { ChatsForm } from "./ChatsForm.tsx";
import { TChatsList } from "../../../api/chats/types.ts";
import c from './Chats.module.css'

type TChatsProps = {
	chats: TChatsList
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const Chats: FC<TChatsProps> = ({ chats, refetch }) => {
	return (
		<div className={ c.chats }>
			<div className={ c.chatsContent }>
				<h2 className={ c.title }>Chats</h2>
				<ul className={ c.list }>
					{ chats.length !== 0 ? chats.map((chat) => (
						<li className={ c.listItem } key={ chat._id }>
							<ChatItem chat={ chat } refetch={ refetch }/>
						</li>
					)) : (<div>Список пуст</div>) }
				</ul>
			</div>
			<div className={ c.formContainer }>
				<ChatsForm refetch={ refetch }/>
			</div>
		</div>
	)
}