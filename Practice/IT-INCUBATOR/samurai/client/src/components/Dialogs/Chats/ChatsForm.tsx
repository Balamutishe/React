import { ChangeEvent, FC, FormEvent } from "react";
import c from "./Chats.module.css";

type TChatsFormProps = {
	chatText: string
	handleChatChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handleChatAdd: (e: FormEvent<HTMLFormElement>) => void
}

export const ChatsForm: FC<TChatsFormProps> = ({
	chatText, handleChatChange, handleChatAdd
}) => {
	return (
		<form
			className={ c.form } onSubmit={ handleChatAdd }
		>
			<textarea
				className={ c.textarea } value={ chatText }
				onChange={ handleChatChange }
			></textarea>
			<button>
				Add Chat
			</button>
		</form>
	)
}