import { TPostsList } from "../../../api/posts/types.ts";
import { Post } from './Post.tsx'
import { PostsForm } from "./PostsForm.tsx";
import c from './Posts.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";


export const Posts = () => {
	const posts: TPostsList = useSelector(
		(state: RootState) => state.userData.posts)

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