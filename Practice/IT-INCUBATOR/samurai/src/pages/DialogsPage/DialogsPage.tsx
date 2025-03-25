import { Messages } from "../../components/Messages/Messages.tsx";
import { Dialogs } from "../../components/Dialogs/Dialogs.tsx";
import c from './DialogsPage.module.css'

export const DialogsPage = () => {
    return (
            <div className={ c.dialogsPageContainer }>
                <Dialogs/>
                <Messages/>
            </div>

    )
}