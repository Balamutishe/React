import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { TMessage, TMessagesList } from "../../../api/messages/types.ts";
import { deleteMessage } from "../../../api/messages/messages.ts";
import { queryClient } from "../../../api/queryClient.ts";
import c from './Messages.module.css'

type MessageItemProps = {
	message: TMessage;
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
	userId: string
}

export const MessageItem: FC<MessageItemProps> = ({
	message, refetch, userId
}) => {
	const deleteMessageMutation = useMutation({
		mutationFn: () => deleteMessage(message._id),
		onSuccess: () => refetch()
	}, queryClient)

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
				<button onClick={ () => deleteMessageMutation.mutate() }>X</button>
			</div> }
		</div>
	)
}