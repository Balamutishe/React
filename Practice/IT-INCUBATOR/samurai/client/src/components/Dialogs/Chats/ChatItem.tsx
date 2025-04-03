import { Link } from "react-router";
import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
} from "@tanstack/react-query";

import { useMutateChatDelete } from "../../../hooks/api";
import { TChat, TChatsList } from "../../../api/chats/types.ts";
import userImg from '../../../assets/149071.png'
import c from './Chats.module.css'

type ChatItemProps = {
	chat: TChat
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const ChatItem: FC<ChatItemProps> = ({ chat, refetch }) => {
	const deleteChat = useMutateChatDelete({ chatId: chat._id, refetch })

	return (
		<div className={ c.chat }>
			<img src={ userImg } alt={ userImg } className={ c.chatImg }/>
			<Link
				to={ `/dialogs/${ chat._id }` } className={ c.chatTitle }
			>{ chat.chatText }</Link>
			<button onClick={ () => deleteChat() }>X</button>
		</div>
	)
}