import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { TPost, TPostsList } from "../../api/posts/types.ts";
import AddPostForm from "../AddItemForm/AddItemForm.tsx";
import { List } from "../List/List.tsx";
import c from "./Posts.module.css";

type TPostsProps = {
		posts: TPostsList,
		createPost: UseMutationResult<TPost, Error, {
				formText: string
		}, unknown>
		deletePost: UseMutationResult<string, Error, string, unknown>
}

export const Posts: FC<TPostsProps> = ({ posts, createPost, deletePost }) => {
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<AddPostForm
						createItem={ createPost }
						inputPlaceholder={ "Введите текст поста" }
					/>
					<List
						list={ posts } itemDelete={ deletePost }
					/>
			</div>
		);
};