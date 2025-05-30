import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TPostsList } from "../../api/posts/types.ts";
import { Post } from "../Posts/Post.tsx";
import c from "./Posts.module.css";

type TPostsListProps = {
		postsList: TPostsList;
		postDeleteMutate: () => UseMutationResult<string, Error, string, unknown>
}

export const PostsList: FC<TPostsListProps> = ({
		postsList, postDeleteMutate,
}) => {
		return (
			<div className={ c.listContainer }>
					<ul className={ c.list }>
							{ postsList.length !== 0 ? postsList.map((post) => (
								<li className={ c.listItem } key={ crypto.randomUUID() }>
										<Post post={ post } postDeleteMutate={ postDeleteMutate }/>
								</li>)) : (<div>Список пуст</div>) }
					</ul>
			</div>
		);
};