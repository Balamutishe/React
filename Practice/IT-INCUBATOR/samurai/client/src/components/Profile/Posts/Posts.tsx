import { useSelector } from "react-redux";

import { PostsForm } from "./PostsForm.tsx";
import { Post } from "./Post.tsx";
import { TPost } from "../../../api/posts/types.ts";
import { RootState } from "../../../redux";
import c from "./Posts.module.css";

export const Posts = () => {
		const posts = useSelector((state: RootState) => state.postsData.posts);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<PostsForm/>
					<ul className={ c.list }>
							{ posts.map((post: TPost) => (
								<li key={ post._id } className={ c.listItem }>
										<Post post={ post }/>
								</li>
							)) }
					</ul>
			</div>
		);
		
};