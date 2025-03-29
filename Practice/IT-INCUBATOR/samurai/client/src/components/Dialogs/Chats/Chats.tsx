import { FC } from 'react'

import { TChatsList } from "../../../api/users/users.ts";
import { ChatItem } from "./ChatItem.tsx";
import c from './Chats.module.css'

type TChatsProps = {
	chats: TChatsList;
}

export const Chats: FC<TChatsProps> = ( { chats } ) => {
	return (
			<div className={ c.dialogs }>
				<h2 className={ c.title }>Chats</h2 >
				<ul className={ c.list }>
					{ chats && chats.map( ( chat ) => (
							<li className={ c.listItem } key={ chat.id }>
								<ChatItem chat={ chat }/>
							</li >
					) ) }
				</ul >
			</div >
	
	)
}