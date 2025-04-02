import { useState, FC } from "react";
import {
	useMutation,
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import { queryClient } from "../../../api/queryClient.ts";
import { createChat } from "../../../api/chats/chats.ts";
import { TChatsList } from "../../../api/chats/types.ts";
import c from "./Chats.module.css";

type TChatsFormProps = {
	userId: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const ChatsForm: FC<TChatsFormProps> = ({
	userId, refetch
}) => {
	const [chatText, setChatText] = useState('')

	const addChat = useMutation({
		mutationFn: () => createChat({ chatText, userId }),
		onSuccess: async () => {
			await refetch()
			setChatText('')
		}
	}, queryClient)

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addChat.mutate()
		} }
		>
				<textarea
					className={ c.textarea } value={ chatText }
					onChange={ (e) => setChatText(e.target.value) }
				></textarea>
			<button>
				Add Chat
			</button>
		</form>
	)
}