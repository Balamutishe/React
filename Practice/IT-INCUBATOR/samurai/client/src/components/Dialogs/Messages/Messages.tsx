import { FC } from "react";

import { MessagesForm } from "./MessagesForm.tsx";
import { MessageItem } from "./MessageItem.tsx";
import { TMessagesList } from "../../../api/messages/types.ts";
import c from "./Messages.module.css";

type TMessagesProps = {
		messages: TMessagesList,
		userId: string,
}

export const Messages: FC<TMessagesProps> = ({
		messages, userId,
}) => {
		return (
			<div className={ c.messages }>
					<div>
							<h2 className={ c.title }>Messages</h2>
							<ul className={ c.list }>
									{ messages.map((message) => (
										<li
											key={ message._id }
											className={ userId === message.userId ?
												`${ c.item } ${ c.itemMy }` :
												`${ c.item } ${ c.itemOpponent }` }
										>
												<MessageItem message={ message } userId={ userId }/>
										</li>
									)) }
							</ul>
							{ messages.length === 0 && <div>Сообщений нет</div> }
					</div>
					<MessagesForm/>
			</div>
		);
};