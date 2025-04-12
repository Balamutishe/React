import { FC } from "react";

import { TMessage } from "../../../api/messages/types.ts";
import c from './Messages.module.css'

type MessageItemProps = {
	message: TMessage;
	userId: string
	handleMessageDelete: (id: string) => void
}

export const MessageItem: FC<MessageItemProps> = ({
	message, userId, handleMessageDelete
}) => {
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
				<button onClick={ () => handleMessageDelete(message._id) }>X</button>
			</div> }
		</div>
	)
}