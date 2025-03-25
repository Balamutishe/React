import c from './Dialogs.module.css'

export const Dialogs = () => {
    return (
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

    )
}