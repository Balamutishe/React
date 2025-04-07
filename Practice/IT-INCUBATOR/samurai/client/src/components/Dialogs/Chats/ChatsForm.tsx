import { useMutateChatAdd } from "../../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import c from "./Chats.module.css";

export const ChatsForm = () => {
	const dispatch = useDispatch();
	const chatText = useSelector((state: RootState) => state.dialogsData.chatText)
	const addChat = useMutateChatAdd({ chatText })

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