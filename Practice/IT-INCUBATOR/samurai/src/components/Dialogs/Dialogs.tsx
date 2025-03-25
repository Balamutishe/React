import { DialogItem } from "./DialogItem.tsx";
import c from './Dialogs.module.css'

export const Dialogs = () => {
    return (
            <div className={ c.dialogs }>
                <h2 className={ c.title }>Dialogs</h2>
                <ul className={ c.list }>
                    <li className={ c.listItem }><DialogItem id={ '1' } title={ 'UserDialog1' }/></li>
                    <li className={ c.listItem }><DialogItem id={ '2' } title={ 'UserDialog2' }/></li>
                    <li className={ c.listItem }><DialogItem id={ '3' } title={ 'UserDialog3' }/></li>
                    <li className={ c.listItem }><DialogItem id={ '4' } title={ 'UserDialog4' }/></li>
                    <li className={ c.listItem }><DialogItem id={ '5' } title={ 'UserDialog5' }/></li>
                </ul>
            </div>

    )
}