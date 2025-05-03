import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { useMutateChatAdd, useMutateMessageAdd } from "../../../hooks/api";
import { setChatText, setMessageText } from "../../../redux/DialogsSlice.ts";
import c from "./DialogsForm.module.css";

type TDialogsFormProps = {
		variant: "chatsForm" | "messagesForm";
		formText: string;
}

export const DialogsForm: FC<TDialogsFormProps> = ({ variant, formText }) => {
		const dispatch = useDispatch();
		const addChat = useMutateChatAdd(formText);
		const addMessage = useMutateMessageAdd(formText);
		
		const handleFormTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				switch (variant) {
						case "chatsForm":
								return dispatch(setChatText(e.target.value));
						case "messagesForm":
								return dispatch(setMessageText(e.target.value));
				}
				
		};
		const handleItemAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				
				const addItem = () => {
						switch (variant) {
								case "chatsForm":
										return addChat();
								case "messagesForm":
										return addMessage();
						}
				};
				
				addItem();
		};
		
		return (
			<form className={ c.form } onSubmit={ handleItemAdd }>
			<textarea
				className={ c.textarea }
				value={ formText }
				onChange={ handleFormTextChange }
			></textarea>
					<button>{ variant === "chatsForm" ? "Add chat" :
						"Add message" }</button>
			</form>
		);
};