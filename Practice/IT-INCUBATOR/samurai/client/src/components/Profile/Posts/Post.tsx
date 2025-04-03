import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
} from "@tanstack/react-query";

import { TPost, TPostsList } from "../../../api/posts/types.ts";
import c from './Posts.module.css'
import { useMutatePostDelete } from "../../../hooks/api/useMutatePostDelete.ts";

type TPostProps = {
	post: TPost
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const Post: FC<TPostProps> = ({ post, refetch }) => {
	const deletePost = useMutatePostDelete({ postId: post._id, refetch })

	return (
		<div className={ c.post }>
			<div className={ c.postContent }>
				<img src={ post.userImg } alt='img' className={ c.postImg }/>
				<div className={ c.postInfo }>
					<p className={ c.postText }>{ post.postText }</p>
					<span>like { post.likeCount }</span>
				</div>
			</div>
			<button onClick={ () => deletePost() }>X</button>
		</div>
	)
}