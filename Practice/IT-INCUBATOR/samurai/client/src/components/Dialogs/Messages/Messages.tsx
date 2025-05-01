import { useSelector } from "react-redux";

import { RootState } from "../../../redux";
import { MessageItem } from "./MessageItem.tsx";
import c from "./Messages.module.css";
import { MessagesForm } from "./MessagesForm.tsx";

export const Messages = () => {
		const userId = useSelector(
			(state: RootState) => state.profileData.user._id);
		const messagesData = useSelector(
			(state: RootState) => state.dialogsData.messagesData);
		
		return (
			<div className={ c.messages }>
					<div>
							<h2 className={ c.title }>Messages</h2>
							<ul className={ c.list }>
									{ messagesData.messages.messagesList.map((message) => (
										<li
											key={ message._id }
											className={ userId === message.userId ?
												`${ c.item } ${ c.itemMy }` :
												`${ c.item } ${ c.itemOpponent }` }
										>
												<MessageItem message={ message } userId={ userId }/>
										</li>
									)) }
							</ul>
							{ messagesData.messages.messagesList.length === 0 &&
								<div>Сообщений нет</div> }
					</div>
					<MessagesForm messageText={ messagesData.messageText }/>
			</div>
		);
};