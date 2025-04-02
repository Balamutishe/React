import { FC } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
	useMutation
} from "@tanstack/react-query";

import { TPost, TPostsList } from "../../../api/posts/types.ts";
import { deletePost } from "../../../api/posts/posts.ts";
import { queryClient } from "../../../api/queryClient.ts";
import c from './Posts.module.css'

type TPostProps = {
	post: TPost
	refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<TPostsList, Error>>
}

export const Post: FC<TPostProps> = ({ post, refetch }) => {
	const deletePostMutation = useMutation({
		mutationFn: () => deletePost(post._id),
		onSuccess: () => refetch()
	}, queryClient)

	return (
		<div className={ c.post }>
			<div className={ c.postContent }>
				<img src={ post.userImg } alt='img' className={ c.postImg }/>
				<div className={ c.postInfo }>
					<p className={ c.postText }>{ post.postText }</p>
					<span>like { post.likeCount }</span>
				</div>
			</div>
			<button onClick={ () => deletePostMutation.mutate() }>X</button>
		</div>
	)
}