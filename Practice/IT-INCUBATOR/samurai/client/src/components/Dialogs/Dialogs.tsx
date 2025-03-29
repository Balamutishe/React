import { users } from "../../api/users/users.ts";
import { useParams } from "react-router";
import { Chats } from "./Chats/Chats.tsx";
import { Messages } from "./Messages/Messages.tsx";
import c from './Dialogs.module.css'

export const Dialogs = () => {
	const { id } = useParams();
	const user = users.find( ( user ) => user.id === '1' )
	const chats = user && user.chats ? user.chats : []
	const chat = chats.find( ( chat ) => chat.id === id );
	const messages = chat && chat.messages ? chat.messages : []
	
	return (
			<div className={ c.dialogs }>
				<Chats chats={ chats }/>
				<Messages messages={ messages }/>
			</div >
	)
}