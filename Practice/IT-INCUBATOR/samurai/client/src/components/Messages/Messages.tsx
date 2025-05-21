import { FC } from "react";
import { TMessagesList } from "../../api/messages/types.ts";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Messages.module.css";

type TMessagesProps = {
		messagesData: {
				messagesList: TMessagesList,
				pageCount: number,
		}
		messageText: string,
}

export const Messages: FC<TMessagesProps> = ({
		messagesData, messageText,
}) => {
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
						variant={ "messagesForm" } formText={ messageText }
					/>
			</div>
		);
};