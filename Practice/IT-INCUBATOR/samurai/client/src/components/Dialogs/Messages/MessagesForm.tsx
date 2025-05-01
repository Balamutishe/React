import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useMutateMessageAdd } from "../../../hooks/api";

import { setMessageText } from "../../../redux/DialogsSlice.ts";
import c from "./Messages.module.css";

type TMessagesFormProps = {
		messageText: string;
}

export const MessagesForm: FC<TMessagesFormProps> = ({ messageText }) => {
		const dispatch = useDispatch();
		const addMessage = useMutateMessageAdd(messageText);
		
		const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setMessageText(e.target.value));
		};
		const handleMessageAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addMessage();
		};
		
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
		);
};