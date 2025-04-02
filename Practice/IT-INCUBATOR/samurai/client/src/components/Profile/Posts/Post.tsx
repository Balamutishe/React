import { FC } from "react";

import { TPost } from "../../../api/posts/types.ts";
import c from './Posts.module.css'

type TPostProps = {
	post: TPost
}

export const Post: FC<TPostProps> = ({ post }) => {
	return (
		<div className={ c.post }>
			<img src={ post.userImg } alt='img' className={ c.postImg }/>
			<p className={ c.postText }>{ post.postText }</p>
			<span>like { post.likeCount }</span>
		</div>
	)
}