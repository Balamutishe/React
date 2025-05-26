import { FC } from "react";
import { useMutatePostAdd } from "../../hooks/api";
import { Form } from "../Form/Form.tsx";
import { List } from "../List/List.tsx";
import c from "./Posts.module.css";
import { TContainerPostsProps } from "./PostsContainer.tsx";

export const Posts: FC<TContainerPostsProps> = (props) => {
		const addPost = useMutatePostAdd(props.postText);
		
		return (<div>
					<h2 className={ c.title }>PostsList</h2>
					<Form
						variant={ "post" }
						formText={ props.postText }
						addItemFunc={ () => addPost.mutate() }
						setFormText={ props.setFormText }
					/>
					<List list={ props.posts }/>
			</div>
		);
};