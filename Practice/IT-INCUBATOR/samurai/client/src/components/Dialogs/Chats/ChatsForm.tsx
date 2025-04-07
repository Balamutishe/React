import { useMutateChatAdd } from "../../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import c from "./Chats.module.css";
import { RootState } from "../../../redux";

export const ChatsForm = () => {
	const dispatch = useDispatch();
	const chatText = useSelector((state: RootState) => state.dialogsData.chatText)
	const addChat = useMutateChatAdd()

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addChat()
		} }
		>
			<textarea
				className={ c.textarea } value={ chatText }
				onChange={ (e) => dispatch(
					{ type: 'dialogsData/setChatText', payload: e.target.value }) }
			></textarea>
			<button>
				Add Chat
			</button>
		</form>
	)
}