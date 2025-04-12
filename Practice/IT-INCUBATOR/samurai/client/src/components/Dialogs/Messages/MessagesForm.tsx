import { ChangeEvent, FC, FormEvent } from "react";

import c from "./Messages.module.css";

type TMessagesFormProps = {
	messageText: string
	handleMessageAdd: (e: FormEvent<HTMLFormElement>) => void
	handleMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MessagesForm: FC<TMessagesFormProps> = ({
	messageText, handleMessageChange, handleMessageAdd
}) => {
	return (
		<form
			className={ c.form } onSubmit={ handleMessageAdd }
		>
			<textarea
				className={ c.textarea } value={ messageText }
				onChange={ handleMessageChange }
			></textarea>
			<button>
				Add Message
			</button>
		</form>
	)
}