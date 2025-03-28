import { FC } from "react";
import c from './Messages.module.css'

type MessageItemProps = {
    message: string;
}

export const MessageItem: FC<MessageItemProps> = ( { message } ) => {
    return (
            <div className={ c.message }>
                { message }
            </div>
    )
}