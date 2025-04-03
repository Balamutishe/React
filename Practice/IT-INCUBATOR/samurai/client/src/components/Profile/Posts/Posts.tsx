import { FC } from 'react'
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { TPostsList } from "../../../api/posts/types.ts";
import { Post } from './Post.tsx'
import { PostsForm } from "./PostsForm.tsx";
import c from './Posts.module.css'

type TPostsProps = {
	posts: TPostsList | []
	userImg?: string
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const Posts: FC<TPostsProps> = ({ posts, userImg, refetch }) => {
	return (<div>
			<h2 className={ c.title }>PostsList</h2>
			<PostsForm userImg={ userImg } refetch={ refetch }/>
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