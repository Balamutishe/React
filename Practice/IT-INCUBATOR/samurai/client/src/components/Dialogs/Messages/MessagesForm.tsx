import { useDispatch, useSelector } from "react-redux";

import { useMutateMessageAdd } from "../../../hooks/api";
import { RootState } from "../../../redux";
import c from "./Messages.module.css";

export const MessagesForm = () => {
	const dispatch = useDispatch()
	const messageText = useSelector(
		(state: RootState) => state.dialogsData.messageText)
	const addMessage = useMutateMessageAdd(
		{ messageText })

	return (
		<form
			className={ c.form } onSubmit={ (e) => {
			e.preventDefault()
			addMessage()
		} }
		>
			<textarea
				className={ c.textarea } value={ messageText }
				onChange={ (e) => dispatch(
					{ type: 'dialogsData/setMessageText', payload: e.target.value }) }
			></textarea>
			<button>
				Add Message
			</button>
		</form>
	)
}