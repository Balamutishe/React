import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
} from "@tanstack/react-query";

import { TMessage, TMessagesList } from "../../../api/messages/types.ts";
import { useMutateMessageDelete } from "../../../hooks/api";
import c from './Messages.module.css'

type MessageItemProps = {
	message: TMessage;
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
	userId: string
}

export const MessageItem: FC<MessageItemProps> = ({
	message, refetch, userId
}) => {
	const deleteMessage = useMutateMessageDelete(
		{ messageId: message._id, refetch })

	return (
		<div className={ c.message }>
			<div className={ c.messageContent }>
				<img
					src={ message.userImg } alt={ message.userImg }
					className={ c.messageImg }
				/>
				<p className={ c.messageText }>
					{ message.messageText }
				</p>
			</div>
			{ message.userId === userId && <div className={ c.messageActions }>
				<button onClick={ () => deleteMessage() }>X</button>
			</div> }
		</div>
	)
}