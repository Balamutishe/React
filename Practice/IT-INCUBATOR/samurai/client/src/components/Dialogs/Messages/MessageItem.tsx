import { FC } from "react";
import { useSelector } from "react-redux";

import { TMessage } from "../../../api/messages/types.ts";
import { useMutateMessageDelete } from "../../../hooks/api";
import { RootState } from "../../../redux";
import c from "./Messages.module.css";

type MessageItemProps = {
		message: TMessage;
}

export const MessageItem: FC<MessageItemProps> = ({
		message,
}) => {
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		const deleteMessage = useMutateMessageDelete(message._id, chatId);
		
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
					{ <div className={ c.messageActions }>
							<button onClick={ () => deleteMessage() }>
									X
							</button>
					</div> }
			</div>
		);
};