import { FC } from "react";

import { MessageItem } from "./MessageItem.tsx";
import c from './Messages.module.css'
import { TMessagesList } from "../../../data/users.ts";

type TMessagesProps = {
    messages: TMessagesList
}

export const Messages: FC<TMessagesProps> = ( { messages } ) => {
    return (
            <div className={ c.messages }>
                <h2 className={ c.title }>Messages</h2>
                <ul className={ c.list }>
                    { messages && messages.map( ( message ) => (
                            <li key={ message.id } className={ c.item }>
                                <MessageItem message={ message.message }/>
                            </li>
                    ) ) }
                </ul>
                { messages && messages.length === 0 && <div>Сообщений нет</div> }
            </div>
    )
}