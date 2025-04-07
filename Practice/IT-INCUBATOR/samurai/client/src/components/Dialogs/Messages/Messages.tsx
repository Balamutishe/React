import { useSelector } from "react-redux";

import { MessagesForm } from "./MessagesForm.tsx";
import { MessageItem } from "./MessageItem.tsx";
import { TMessagesList } from "../../../api/messages/types.ts";
import { RootState } from "../../../redux";
import c from './Messages.module.css'

export const Messages = () => {
	const userId = useSelector((state: RootState) => state.profileData.user._id);
	const messages: TMessagesList = useSelector(
		(state: RootState) => state.dialogsData.messages)

	return (
		<div className={ c.messages }>
			<div>
				<h2 className={ c.title }>Messages</h2>
				<ul className={ c.list }>
					{ messages.map((message) => (
						<li
							key={ message._id } className={ userId === message.userId ?
							`${ c.item } ${ c.itemMy }` : `${ c.item } ${ c.itemOpponent }` }
						>
							<MessageItem
								message={ message } userId={ userId }
							/>
						</li>
					)) }
				</ul>
				{ messages.length === 0 && <div>Сообщений нет</div> }
			</div>
			<MessagesForm/>
		</div>
	)
}