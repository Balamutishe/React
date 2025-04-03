import { useState, FC } from "react";
import {
	useMutation,
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import { queryClient } from "../../../api/queryClient.ts";
import { createMessage } from "../../../api/messages/messages.ts";
import { TMessagesList } from "../../../api/messages/types.ts";
import userImg from '../../../assets/149071.png'
import c from "./Messages.module.css";

type TMessagesFormProps = {
	chatId: string;
	userId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TMessagesList, Error>>
}

export const MessagesForm: FC<TMessagesFormProps> = ({
	userId, chatId, refetch
}) => {
	const [messageText, setMessageText] = useState('')

	const addMessage = useMutation({
		mutationFn: () => createMessage(messageText, userImg, chatId, userId),
		onSuccess: async () => {
			await refetch()
			setMessageText('')
		}
	}, queryClient)

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addMessage.mutate()
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