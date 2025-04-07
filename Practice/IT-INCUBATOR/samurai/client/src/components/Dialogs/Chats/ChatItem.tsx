import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { FC } from "react";

import { useMutateChatDelete } from "../../../hooks/api";
import { TChat } from "../../../api/chats/types.ts";
import userImg from '../../../assets/149071.png'
import { getAllMessages } from "../../../api/messages/messages.ts";
import c from './Chats.module.css'

type ChatItemProps = {
	chat: TChat
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
	const dispatch = useDispatch()
	const deleteChat = useMutateChatDelete({ chatId: chat._id })

	return (
		<div className={ c.chat }>
			<img src={ userImg } alt={ userImg } className={ c.chatImg }/>
			<Link
				to={ `/dialogs/${ chat._id }` } className={ c.chatTitle }
				onClick={ async () => {
					dispatch({ type: 'dialogsData/setActiveChatId', payload: chat._id })
					dispatch({
						type: 'dialogsData/setMessages',
						payload: await getAllMessages(chat._id)
					})
				}
				}
			>{ chat.chatText }</Link>
			<button onClick={ () => deleteChat() }>X</button>
		</div>
	)
}