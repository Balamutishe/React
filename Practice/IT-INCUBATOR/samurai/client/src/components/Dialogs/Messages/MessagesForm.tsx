import { useState, FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import { TMessagesList } from "../../../api/messages/types.ts";
import { useMutateMessageAdd } from "../../../hooks/api";
import c from "./Messages.module.css";

type TMessagesFormProps = {
	chatId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
}

export const MessagesForm: FC<TMessagesFormProps> = ({
	chatId, refetch
}) => {
	const [messageText, setMessageText] = useState('')

	const addMessage = useMutateMessageAdd(
		{ messageText, setMessageText, chatId, refetch })

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addMessage()
		} }
		>
				<textarea
					className={ c.textarea } value={ messageText }
					onChange={ (e) => setMessageText(e.target.value) }
				></textarea>
			<button>
				Add Message
			</button>
		</form>
	)
}