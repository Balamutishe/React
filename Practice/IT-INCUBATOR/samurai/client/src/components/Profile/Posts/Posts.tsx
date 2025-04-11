import { ChangeEvent, FC, FormEvent } from "react";

import { PostsForm } from "./PostsForm.tsx";
import { Post } from './Post.tsx'
import { TPostsList } from "../../../api/posts/types.ts";
import c from './Posts.module.css'

type TPostsProps = {
	postsData: {
		posts: TPostsList,
		postText: string,
	},
	handlePostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handlePostAdd: (e: FormEvent<HTMLFormElement>) => void
	handlePostDelete: (id: string) => void
}

export const Posts: FC<TPostsProps> = ({
	postsData,
	handlePostChange,
	handlePostAdd,
	handlePostDelete
}) => {
	return (<div>
			<h2 className={ c.title }>PostsList</h2>
			<PostsForm
				postText={ postsData.postText }
				handlePostChange={ handlePostChange }
				handlePostAdd={ handlePostAdd }
			/>
			<ul className={ c.list }>
				{ postsData.posts.map((post) => (
					<li key={ post._id } className={ c.listItem }>
						<Post post={ post } handlePostDelete={ handlePostDelete }/>
					</li>
				)) }
			</ul>
		</div>
	)

}