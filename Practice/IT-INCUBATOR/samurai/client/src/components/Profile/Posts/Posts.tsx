import { useSelector } from "react-redux";

import { TPostsList } from "../../../api/posts/types.ts";
import { PostsForm } from "./PostsForm.tsx";
import { Post } from './Post.tsx'
import { RootState } from "../../../redux";
import c from './Posts.module.css'


export const Posts = () => {
	const posts: TPostsList = useSelector(
		(state: RootState) => state.profileData.posts)

	return (<div>
			<h2 className={ c.title }>PostsList</h2>
			<PostsForm/>
			<ul className={ c.list }>
				{ posts.map((post) => (
					<li key={ post._id } className={ c.listItem }>
						<Post post={ post }/>
					</li>
				)) }
			</ul>
		</div>
	)

}