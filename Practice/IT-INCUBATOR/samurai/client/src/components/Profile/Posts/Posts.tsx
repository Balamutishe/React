import { FC } from 'react'
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { Post } from './Post.tsx'
import { PostsForm } from "./PostsForm.tsx";
import c from './Posts.module.css'
import { TPostsList } from "../../../api/posts/types.ts";

type TPostsProps = {
	posts: TPostsList | []
	userId: string
	userImg?: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const Posts: FC<TPostsProps> = ({ posts, userId, userImg, refetch }) => {
	return (<div>
			<h2 className={ c.title }>PostsList</h2>
			<PostsForm userId={ userId } userImg={ userImg } refetch={ refetch }/>
			<ul className={ c.list }>
				{ posts.map((post) => (
					<li key={ post._id } className={ c.listItem }>
						<Post post={ post } refetch={ refetch }/>
					</li>
				)) }
			</ul>
		</div>
	)

}