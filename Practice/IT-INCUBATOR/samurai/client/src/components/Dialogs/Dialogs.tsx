// import { Chats } from "./Chats/Chats.tsx";
// import { Messages } from "./Messages/Messages.tsx";
import { ChatsView } from "./Chats/ChatsView.tsx";
import c from './Dialogs.module.css'

export const Dialogs = () => {
	return (
		<div className={ c.dialogs }>
			<ChatsView/>
			{/*<Messages messages={ messages }/>*/ }
		</div>
	)
}