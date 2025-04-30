import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMessageText } from "../../../redux/DialogsSlice.ts";
import { useMutateMessageAdd } from "../../../hooks/api";
import { RootState } from "../../../redux";
import c from "./Messages.module.css";

export const MessagesForm = () => {
		const dispatch = useDispatch();
		const messageText = useSelector(
			(state: RootState) => state.dialogsData.messagesData.messageText);
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