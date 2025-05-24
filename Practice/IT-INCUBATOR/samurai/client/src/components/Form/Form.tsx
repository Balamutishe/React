import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutateChatAdd, useMutateMessageAdd } from "../../hooks/api";
import { RootState } from "../../redux";
import { setChatText } from "../../redux/ChatsSlice.ts";
import { setMessageText } from "../../redux/MessagesSlice.ts";

import c from "./Form.module.css";

type TFormProps = {
		variant: "chatsForm" | "messagesForm";
}

export const Form: FC<TFormProps> = ({ variant }) => {
		const dispatch = useDispatch();
		
		const messageText = useSelector(
			(state: RootState) => state.messagesData.messageText);
		const chatText = useSelector(
			(state: RootState) => state.chatsData.chatText);
		
		const addChat = useMutateChatAdd(chatText);
		const addMessage = useMutateMessageAdd(messageText);
		
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
				value={ variant === "chatsForm" ? chatText : messageText }
				onChange={ handleFormTextChange }
			></textarea>
					<button>{ variant === "chatsForm" ? "Add chat" :
						"Add message" }</button>
			</form>
		);
};