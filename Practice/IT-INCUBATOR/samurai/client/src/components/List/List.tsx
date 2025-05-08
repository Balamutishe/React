import { FC } from "react";
import { TChat, TChatsList } from "../../api/chats/types.ts";
import { TMessage, TMessagesList } from "../../api/messages/types.ts";
import { TPost, TPostsList } from "../../api/posts/types.ts";
import { TUser, TUsersList } from "../../api/users/types.ts";
import { ChatItem } from "../Dialogs/Chats/ChatItem.tsx";
import c from "../Dialogs/Chats/Chats.module.css";
import { MessageItem } from "../Dialogs/Messages/MessageItem.tsx";
import { Post } from "../Profile/Posts/Post.tsx";
import { User } from "../Users/User.tsx";

type TListProps = {
		list: TPostsList | TMessagesList | TChatsList | TUsersList;
}

export const List: FC<TListProps> = ({ list }) => {
		const handlerListItemView = (data: TChat | TMessage | TPost | TUser) => {
				if ("postText" in data) {
						return <Post post={ data }/>;
				} else if ("chatText" in data) {
						return <ChatItem chat={ data }/>;
				} else if ("messageText" in data) {
						return <MessageItem message={ data }/>;
				} else if ("username" in data) {
						return <User user={ data }/>;
				}
		};
		
		return (
			<div className={ c.listContainer }>
					<ul className={ c.list }>
							{ list.length !== 0 ? list.map((item) => (
								<li className={ c.listItem } key={ crypto.randomUUID() }>
										{ handlerListItemView(item) }
								</li>)) : (<div>Список пуст</div>) }
					</ul>
			</div>
		);
};