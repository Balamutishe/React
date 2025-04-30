import { Link } from "react-router";
import { FC } from "react";

import { TChat } from "../../../api/chats/types.ts";
import userImg from "../../../assets/149071.png";
import c from "./Chats.module.css";
import {
		useMutateChatDelete,
		useQueryGetAllMessages,
} from "../../../hooks/api";
import { useDispatch } from "react-redux";
import { setActiveChatId } from "../../../redux/DialogsSlice.ts";

type ChatItemProps = {
		chat: TChat
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
		const dispatch = useDispatch();
		const queryMessages = useQueryGetAllMessages(chat._id);
		const deleteChat = useMutateChatDelete(chat._id);
		
		const handleSetChatActive = async () => {
				dispatch(setActiveChatId(chat._id));
				await queryMessages.refetch();
		};
		const handleChatDelete = () => {
				deleteChat();
		};
		
		return (
			<div className={ c.chat }>
					<img src={ userImg } alt={ userImg } className={ c.chatImg }/>
					<Link
						onClick={ handleSetChatActive }
						to={ `/dialogs/${ chat._id }` } className={ c.chatTitle }
					>{ chat.chatText }</Link>
					<button onClick={ handleChatDelete }>X</button>
			</div>
		);
};