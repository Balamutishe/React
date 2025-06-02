import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";

import { TMessage } from "../../api/messages/types.ts";
import c from "./Messages.module.css";

export type TMessageItemProps = {
		message: TMessage;
		deleteMessage: UseMutationResult<string, Error, string, unknown>
}

export const MessageItem: FC<TMessageItemProps> = ({
		message, deleteMessage,
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
					<div className={ c.messageActions }>
							<button
								onClick={ () => deleteMessage.mutate(message._id) }
								disabled={ deleteMessage.isPending }
							>
									X
							</button>
					</div>
			</div>
		);
};