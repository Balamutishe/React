import { Link } from "react-router";
import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { TChat, TChatsList } from "../../../api/chats/types.ts";
import userImg from '../../../assets/149071.png'
import { deleteChat } from "../../../api/chats/chats.ts";
import { queryClient } from "../../../api/queryClient.ts";
import c from './Chats.module.css'

type ChatItemProps = {
	chat: TChat
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const ChatItem: FC<ChatItemProps> = ({ chat, refetch }) => {
	const deleteChatMutate = useMutation({
		mutationFn: () => deleteChat(chat._id),
		onSuccess: () => refetch()
	}, queryClient)

	return (
		<div className={ c.chat }>
			<img src={ userImg } alt={ userImg } className={ c.chatImg }/>
			<Link
				to={ `/dialogs/${ chat._id }` } className={ c.chatTitle }
			>{ chat.chatText }</Link>
			<button onClick={ () => deleteChatMutate.mutate() }>X</button>
		</div>
	)
}