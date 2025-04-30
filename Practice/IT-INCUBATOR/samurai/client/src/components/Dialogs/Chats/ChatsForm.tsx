import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutateChatAdd } from "../../../hooks/api";
import { setChatText } from "../../../redux/DialogsSlice.ts";
import { RootState } from "../../../redux";
import c from "./Chats.module.css";


export const ChatsForm = () => {
		const dispatch = useDispatch();
		const chatText = useSelector(
			(state: RootState) => state.dialogsData.chatsData.chatText);
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