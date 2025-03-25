import { FC } from "react";
import c from './Messages.module.css'

type MessageProps = {
    message: string;
}

export const Message: FC<MessageProps> = ( { message } ) => {
    return (
            <div className={ c.message }>
                { message }
            </div>
    )
}