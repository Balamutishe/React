import c from './Messages.module.css'
import { Message } from "./Message.tsx";

export const Messages = () => {
    return (
            <div className={ c.messages }>
                <h2 className={ c.title }>Messages</h2>
                <ul className={ c.list }>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                    <li className={ c.item }><Message message={ "UserMessage" }/></li>
                </ul>
            </div>
    )
}