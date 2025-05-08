import { FC } from "react";
import { TMessagesList } from "../../api/messages/types.ts";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Messages.module.css";

type TMessagesProps = {
		messagesData: {
				messages: {
						messagesList: TMessagesList,
						pageCount: number,
				}
				messageText: string,
				messagePage: number,
		}
}

export const Messages: FC<TMessagesProps> = ({ messagesData }) => {
		return (
			<div className={ c.messages }>
					<div>
							<div className={ c.header }>
									<h2 className={ c.title }>Messages</h2>
									<Pagination
										pageCount={ messagesData.messages.pageCount }
										variant={ "messages" }
									/>
							</div>
							<List list={ messagesData.messages.messagesList }/>
					</div>
					<Form
						variant={ "messagesForm" } formText={ messagesData.messageText }
					/>
			</div>
		);
};