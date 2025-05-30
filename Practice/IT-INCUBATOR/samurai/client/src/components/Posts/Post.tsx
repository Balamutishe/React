import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";

import { TPost } from "../../api/posts/types.ts";
import { dateTimeUpdate } from "../../utils/dateTimeUpdate.ts";
import c from "./Posts.module.css";

type TPostProps = {
		post: TPost
		postDeleteMutate: () => UseMutationResult<string, Error, string, unknown>
}

export const Post: FC<TPostProps> = ({ post, postDeleteMutate }) => {
		const { mutate } = postDeleteMutate();
		
		return (
			<div className={ c.post }>
					<div className={ c.postContent }>
							<img src={ post.userImg } alt="img" className={ c.postImg }/>
							<div className={ c.postInfo }>
									<p className={ c.postText }>{ post.postText }</p>
									<span>like { post.likeCount }</span>
									<span>Created at: { dateTimeUpdate(post.created_at) }</span>
							</div>
					</div>
					<button
						onClick={ () => mutate(post._id) }
					>X
					</button>
			</div>
		);
};