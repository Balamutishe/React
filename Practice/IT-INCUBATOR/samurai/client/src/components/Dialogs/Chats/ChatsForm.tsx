import { useState, FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions
} from "@tanstack/react-query";

import { TChatsList } from "../../../api/chats/types.ts";
import c from "./Chats.module.css";
import { useMutateChatAdd } from "../../../hooks/api";

type TChatsFormProps = {
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TChatsList, Error>>
}

export const ChatsForm: FC<TChatsFormProps> = ({
	refetch
}) => {
	const [chatText, setChatText] = useState('')

	const addChat = useMutateChatAdd({ chatText, setChatText, refetch })

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addChat()
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