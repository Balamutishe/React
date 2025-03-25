import { Link } from "react-router";
import { FC } from "react";

import DialogImg from '../../assets/149071.png'
import c from './Dialogs.module.css'

type DialogItemProps = {
    id: string;
    title: string;
}

export const DialogItem: FC<DialogItemProps> = ( { id, title } ) => {
    return (
            <div className={ c.dialog }>
                <img src={ DialogImg } alt={ DialogImg } className={ c.dialogImg }/>
                <Link to={ `/dialogs/${ id }` } className={ c.dialogTitle }>{ title }</Link>
            </div>
    )
}