import { FC } from "react";
import { useMutatePostAdd } from "../../hooks/api";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Posts.module.css";
import { TContainerPostsProps } from "./PostsContainer.tsx";

export const Posts: FC<TContainerPostsProps> = ({
		posts, postText, setPostText,
}) => {
		const addPost = useMutatePostAdd(postText);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<Form
						variant={ "post" }
						formText={ postText }
						addItemFunc={ addPost }
						setFormText={ setPostText }
					/>
					<List list={ posts }/>
			</div>
		);
};