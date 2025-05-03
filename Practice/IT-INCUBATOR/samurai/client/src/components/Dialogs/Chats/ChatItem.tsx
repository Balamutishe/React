import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

import { TChat } from "../../../api/chats/types.ts";
import userImg from "../../../assets/149071.png";
import { useMutateChatDelete } from "../../../hooks/api";
import {
		useQueryGetOneChat,
} from "../../../hooks/api/chats/useQueryGetOneChat.ts";
import { setActiveChatId } from "../../../redux/DialogsSlice.ts";
import c from "./Chats.module.css";

type ChatItemProps = {
		chat: TChat
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
		const dispatch = useDispatch();
		const deleteChat = useMutateChatDelete(chat._id);
		const queryGetOneChat = useQueryGetOneChat(chat._id);
		
		const handleSetChatActive = async () => {
				dispatch(setActiveChatId(chat._id));
				await queryGetOneChat.refetch();
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