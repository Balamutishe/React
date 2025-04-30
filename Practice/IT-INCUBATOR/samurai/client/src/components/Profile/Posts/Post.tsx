import { FC } from "react";

import { TPost } from "../../../api/posts/types.ts";
import c from "./Posts.module.css";
import { useMutatePostDelete } from "../../../hooks/api";

type TPostProps = {
		post: TPost
}

export const Post: FC<TPostProps> = ({ post }) => {
		const deletePost = useMutatePostDelete(post._id);
		
		return (
			<div className={ c.post }>
					<div className={ c.postContent }>
							<img src={ post.userImg } alt="img" className={ c.postImg }/>
							<div className={ c.postInfo }>
									<p className={ c.postText }>{ post.postText }</p>
									<span>like { post.likeCount }</span>
							</div>
					</div>
					<button onClick={ () => deletePost() }>X</button>
			</div>
		);
};