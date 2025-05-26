import { FC } from "react";
import { useSelector } from "react-redux";
import { TPostsList } from "../../api/posts/types.ts";
import { useMutatePostAdd } from "../../hooks/api";
import { RootState } from "../../redux";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Posts.module.css";

type TPostsProps = {
		posts: TPostsList
}

export const Posts: FC<TPostsProps> = ({ posts }) => {
		const postText = useSelector(
			(state: RootState) => state.formData.formText.postText);
		const addPost = useMutatePostAdd(postText);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<Form
						variant={ "post" }
						formText={ postText }
						addItemFunc={ () => addPost.mutate() }
					/>
					<List list={ posts }/>
			</div>
		);
};