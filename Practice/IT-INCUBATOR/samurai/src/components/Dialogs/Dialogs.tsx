import c from './Dialogs.module.css'

export const Dialogs = () => {
    return (
            <div className={ c.container }>
                <div className={ c.dialogs }>
                    <h2 className={ c.title }>Dialogs</h2>
                    <ul className={ c.list }>
                        <li className={ c.item }>UserDialog</li>
                        <li className={ c.item }>UserDialog</li>
                        <li className={ c.item }>UserDialog</li>
                        <li className={ c.item }>UserDialog</li>
                        <li className={ c.item }>UserDialog</li>
                        <li className={ c.item }>UserDialog</li>
                    </ul>
                </div>
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
            </div>

    )
}