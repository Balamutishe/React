import c from './Messages.module.css'

export const Messages = () => {
    return (
            <div className={ c.messages }>
                <h2 className={ c.title }>Messages</h2>
                <ul className={ c.list }>
                    <li className={ c.item }>UserMessage</li>
                    <li className={ c.item }>UserMessage</li>
                    <li className={ c.item }>UserMessage</li>
                    <li className={ c.item }>UserMessage</li>
                    <li className={ c.item }>UserMessage</li>
                    <li className={ c.item }>UserMessage</li>
                </ul>
            </div>
    )
}