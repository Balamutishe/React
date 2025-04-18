import { FC } from "react";

import { TPost } from "../../../api/posts/types.ts";
import c from './Posts.module.css'

type TPostProps = {
	post: TPost
	handlePostDelete: (id: string) => void
}

export const Post: FC<TPostProps> = ({ post, handlePostDelete }) => {
	return (
		<div className={ c.post }>
			<div className={ c.postContent }>
				<img src={ post.userImg } alt='img' className={ c.postImg }/>
				<div className={ c.postInfo }>
					<p className={ c.postText }>{ post.postText }</p>
					<span>like { post.likeCount }</span>
				</div>
			</div>
			<button onClick={ () => handlePostDelete(post._id) }>X</button>
		</div>
	)
}