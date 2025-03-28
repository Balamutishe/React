import { Link } from "react-router";
import { FC } from "react";

import c from './Chats.module.css'
import { TChat } from "../../../redux/users.ts";

type ChatItemProps = {
    chat: TChat
}

export const ChatItem: FC<ChatItemProps> = ( { chat } ) => {
    return (
            <div className={ c.chat }>
                <img src={ chat.imgUrl } alt={ chat.imgUrl } className={ c.chatImg }/>
                <Link to={ `/dialogs/${ chat.id }` } className={ c.chatTitle }>{ chat.title }</Link>
            </div>
    )
}