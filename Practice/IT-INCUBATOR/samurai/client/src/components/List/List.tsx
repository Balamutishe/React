import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TChat, TChatsList } from "../../api/chats/types.ts";
import { TMessage, TMessagesList } from "../../api/messages/types.ts";
import { TPost, TPostsList } from "../../api/posts/types.ts";
import { TUser, TUsersList } from "../../api/users/types.ts";
import { ChatItem } from "../Chats/ChatItem.tsx";
import { MessageItem } from "../Messages/MessageItem.tsx";
import { Post } from "../Posts/Post.tsx";
import { User } from "../Users/User.tsx";
import c from "./List.module.css";

type TListProps = {
		list: TPostsList | TMessagesList | TChatsList | TUsersList;
		itemDelete: () => UseMutationResult<string, Error, string, unknown>
}

export const List: FC<TListProps> = ({ list, itemDelete }) => {
		const handlerListItemView = (data: TChat | TMessage | TPost | TUser) => {
				if ("postText" in data) {
						return <Post post={ data } postDelete={ itemDelete }/>;
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