import { FC } from "react";
import { useMutateMessageAdd } from "../../hooks/api";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Messages.module.css";
import { TMessagesProps } from "./MessagesContainer.tsx";

export const Messages: FC<TMessagesProps> = ({
		messagesData, messageText, setMessageText, activeChatId,
}) => {
		const addMessage = useMutateMessageAdd(messageText, activeChatId);
		
		return (
			<div className={ c.messages }>
					<div>
							<div className={ c.header }>
									<h2 className={ c.title }>Messages</h2>
									<Pagination
										pageCount={ messagesData.pageCount }
										variant={ "messages" }
									/>
							</div>
							<List list={ messagesData.messagesList }/>
					</div>
					<Form
						variant={ "message" } formText={ messageText }
						addItemFunc={ addMessage } setFormText={ setMessageText }
					/>
			</div>
		);
};