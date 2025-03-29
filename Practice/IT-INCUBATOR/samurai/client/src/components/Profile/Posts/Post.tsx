import { FC } from "react";

import { TPost } from "../../../api/users/users.ts";
import c from './Posts.module.css'

type TPostProps = {
	post: TPost
}

export const Post: FC<TPostProps> = ( { post } ) => {
	return (
			<div className={ c.post }>
				<img src={ post.imgUrl } alt='img' className={ c.postImg }/>
				<p className={ c.postText }>{ post.message }</p >
				<span >like { post.likeCount }</span >
			</div >
	)
}