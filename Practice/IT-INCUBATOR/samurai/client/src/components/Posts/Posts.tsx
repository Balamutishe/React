import { FC } from "react";
import { PostForm } from "../Form/PostForm.tsx";
import c from "./Posts.module.css";
import { TContainerPostsProps } from "./PostsContainer.tsx";
import { PostsList } from "./PostsList.tsx";

export const Posts: FC<TContainerPostsProps> = ({
		posts, postAddMutate, postDeleteMutate,
}) => {
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<PostForm postAddMutate={ postAddMutate }/>
					<PostsList postsList={ posts } postDeleteMutate={ postDeleteMutate }/>
			</div>
		);
};