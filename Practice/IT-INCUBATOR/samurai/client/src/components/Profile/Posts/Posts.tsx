import { useSelector } from "react-redux";

import { TPost } from "../../../api/posts/types.ts";
import { RootState } from "../../../redux";
import { Post } from "./Post.tsx";
import c from "./Posts.module.css";
import { PostsForm } from "./PostsForm.tsx";

export const Posts = () => {
		const postsData = useSelector((state: RootState) => state.postsData);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<PostsForm postText={ postsData.postText }/>
					<ul className={ c.list }>
							{ postsData.posts.map((post: TPost) => (
								<li key={ post._id } className={ c.listItem }>
										<Post post={ post }/>
								</li>
							)) }
					</ul>
			</div>
		);
		
};