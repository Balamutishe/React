import { Chats } from "./Chats/Chats.tsx";
import { Messages } from "./Messages/Messages.tsx";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import c from './Dialogs.module.css'

export const Dialogs = () => {
	const activeChatId = useSelector(
		(state: RootState) => state.dialogsData.activeChatId);

	return (
		<div className={ c.dialogs }>
			<Chats/>
			{ activeChatId !== '' ? <Messages/> :
				<div style={ { "padding": "0.5rem 1rem" } }>Выберите чат для
					взаимодействия</div> }
		</div>
	)
}