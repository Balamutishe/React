import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TMessage, TMessagesList } from "../../api/messages/types.ts";
import AddMessageForm from "../AddItemForm/AddItemForm.tsx";
import { List } from "../List/List.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import c from "./Messages.module.css";

type TMessagesProps = {
		messages: {
				messagesList: TMessagesList,
				pageCount: number
		} | undefined,
		createMessage: UseMutationResult<TMessage, Error, {
				formText: string
				chatId?: string
		}, unknown>
		deleteMessage: UseMutationResult<string, Error, string, unknown>
		chatId: string | undefined
}

export const Messages: FC<TMessagesProps> = ({
		messages, deleteMessage, createMessage, chatId,
}) => {
		return <div className={ c.messages }>
				<div>
						<div className={ c.header }>
								<h2 className={ c.title }>Messages</h2>
								<Pagination
									pageCount={ messages?.pageCount || 1 }
									variant={ "messages" }
								/>
						</div>
						<List
							list={ messages?.messagesList }
							itemDelete={ deleteMessage }
						/>
				</div>
				<AddMessageForm
					createItem={ createMessage }
					inputPlaceholder={ "Введите текст сообщения" }
					chatId={ chatId }
				/>
		</div>;
};