import { Link } from "react-router";
import { FC } from "react";

import { TChat } from "../../../api/chats/types.ts";
import userImg from '../../../assets/149071.png'
import c from './Chats.module.css'

type ChatItemProps = {
	chat: TChat
	handleChatDelete: (id: string) => void
}

export const ChatItem: FC<ChatItemProps> = ({
	chat, handleChatDelete
}) => {
	return (
		<div className={ c.chat }>
			<img src={ userImg } alt={ userImg } className={ c.chatImg }/>
			<Link
				to={ `/dialogs/${ chat._id }` } className={ c.chatTitle }
			>{ chat.chatText }</Link>
			<button onClick={ () => handleChatDelete(chat._id) }>X</button>
		</div>
	)
}