import { FC } from 'react'
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { ChatItem } from "./ChatItem.tsx";
import { ChatsForm } from "./ChatsForm.tsx";
import { TChatsList } from "../../../api/chats/types.ts";
import c from './Chats.module.css'

type TChatsProps = {
	chats: TChatsList
	userId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const Chats: FC<TChatsProps> = ({ chats, userId, refetch }) => {
	return (
		<div className={ c.chats }>
			<h2 className={ c.title }>Chats</h2>
			<ChatsForm userId={ userId } refetch={ refetch }/>
			<ul className={ c.list }>
				{ chats.length !== 0 ? chats.map((chat) => (
					<li className={ c.listItem } key={ chat._id }>
						<ChatItem chat={ chat } refetch={ refetch }/>
					</li>
				)) : (<div>Список пуст</div>) }
			</ul>
		</div>
	)
}