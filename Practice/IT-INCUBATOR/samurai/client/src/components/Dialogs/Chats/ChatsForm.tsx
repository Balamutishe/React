import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { useMutateChatAdd } from "../../../hooks/api";
import { setChatText } from "../../../redux/DialogsSlice.ts";
import c from "./Chats.module.css";

type TChatsFormProps = {
		chatText: string;
}

export const ChatsForm: FC<TChatsFormProps> = ({ chatText }) => {
		const dispatch = useDispatch();
		const addChat = useMutateChatAdd(chatText);
		
		const handleChatChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				dispatch(setChatText(e.target.value));
		};
		const handleChatAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addChat();
		};
		
		return (
			<form className={ c.form } onSubmit={ handleChatAdd }>
			<textarea
				className={ c.textarea } value={ chatText }
				onChange={ handleChatChange }
			></textarea>
					<button>Add Chat</button>
			</form>
		);
};