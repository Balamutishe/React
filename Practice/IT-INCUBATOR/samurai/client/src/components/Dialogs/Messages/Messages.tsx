import { FC } from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { MessageItem } from "./MessageItem.tsx";
import { TMessagesList } from "../../../api/messages/types.ts";
import { MessagesForm } from "./MessagesForm.tsx";
import c from './Messages.module.css'

type TMessagesProps = {
	messages: TMessagesList
	chatId: string
	userId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
}

export const Messages: FC<TMessagesProps> = ({
	messages, chatId, userId, refetch
}) => {
	return (
		<div className={ c.messages }>
			<div>
				<h2 className={ c.title }>Messages</h2>
				<ul className={ c.list }>
					{ messages && messages.map((message) => (
						<li
							key={ message._id } className={ userId === message.userId ?
							`${ c.item } ${ c.itemMy }` : `${ c.item } ${ c.itemOpponent }` }
						>
							<MessageItem
								message={ message } refetch={ refetch } userId={ userId }
							/>
						</li>
					)) }
				</ul>
				{ messages && messages.length === 0 && <div>Сообщений нет</div> }
			</div>
			<MessagesForm chatId={ chatId } userId={ userId } refetch={ refetch }/>
		</div>
	)
}