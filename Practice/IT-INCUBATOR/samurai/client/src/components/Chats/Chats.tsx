import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TChat, TChatsList } from "../../api/chats/types.ts";
import AddChatForm from "../AddItemForm/AddItemForm.tsx";
import { List } from "../List/List.tsx";
import c from "./Chats.module.css";

type TChatsProps = {
		chats: TChatsList,
		createChat: UseMutationResult<TChat, Error, {
				formText: string
		}, unknown>
		deleteChat: UseMutationResult<string, Error, string, unknown>
}

export const Chats: FC<TChatsProps> = ({ chats, createChat, deleteChat }) => {
		return (
			<div className={ c.chats }>
					<div className={ c.chatsContent }>
							<div className={ c.header }>
									<h2 className={ c.title }>Chats</h2>
							</div>
							<List
								list={ chats } itemDelete={ deleteChat }
							/>
					</div>
					<div className={ c.formContainer }>
							<AddChatForm
								createItem={ createChat }
								inputPlaceholder={ "Введите текст чата" }
							/>
					</div>
			</div>
		);
};