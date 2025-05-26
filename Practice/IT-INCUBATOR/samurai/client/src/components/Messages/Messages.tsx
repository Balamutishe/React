import { FC } from "react";
import { useSelector } from "react-redux";
import { TMessagesList } from "../../api/messages/types.ts";
import { useMutateMessageAdd } from "../../hooks/api";
import { RootState } from "../../redux";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Messages.module.css";

type TMessagesProps = {
		messagesData: {
				messagesList: TMessagesList,
				pageCount: number,
		}
}

export const Messages: FC<TMessagesProps> = ({
		messagesData,
}) => {
		const messageText = useSelector(
			(state: RootState) => state.formData.formText.messageText);
		const addMessage = useMutateMessageAdd(messageText);
		
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
						addItemFunc={ () => addMessage.mutate() }
					/>
			</div>
		);
};