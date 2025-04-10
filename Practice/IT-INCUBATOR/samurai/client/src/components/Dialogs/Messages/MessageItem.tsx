import { FC } from "react";

import { TMessage } from "../../../api/messages/types.ts";
import { useMutateMessageDelete } from "../../../hooks/api";
import c from './Messages.module.css'

type MessageItemProps = {
	message: TMessage;
	userId: string
}

export const MessageItem: FC<MessageItemProps> = ({
	message, userId
}) => {
	const deleteMessage = useMutateMessageDelete(
		{ messageId: message._id })

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