import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { List } from "../List/List.tsx";
import c from "./Posts.module.css";
import { PostsForm } from "./PostsForm.tsx";

export const Posts = () => {
		const postsData = useSelector((state: RootState) => state.postsData);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<PostsForm postText={ postsData.postText }/>
					<List list={ postsData.posts }/>
			</div>
		);
		
};