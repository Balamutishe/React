import { ChatsView } from "./Chats/ChatsView.tsx";
import { MessagesView } from "./Messages/MessagesView.tsx";
import c from './Dialogs.module.css'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export const Dialogs = () => {
	const { chatId } = useParams();
	const userId = useSelector((state: RootState) => state.profileData.user._id)

	return (
		<div className={ c.dialogs }>
			<ChatsView/>
			{ chatId ? <MessagesView chatId={ chatId } userId={ userId }/> :
				<div style={ { "padding": "0.5rem 1rem" } }>Выберите чат для
					взаимодействия</div> }
		</div>
	)
}