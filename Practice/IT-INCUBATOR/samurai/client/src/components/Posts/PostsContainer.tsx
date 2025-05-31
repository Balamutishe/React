import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
		useMutatePostAdd,
		useMutatePostDelete,
		useQueryGetAllPosts,
} from "../../hooks/api";
import { RootState } from "../../redux";
import { List } from "../List/List.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { PostForm } from "./PostForm.tsx";
import c from "./Posts.module.css";

const mapStateToProps = (state: RootState) =>
	({ posts: state.postsData.posts });

const mapDispatchToProps = () => ({
		postAdd: useMutatePostAdd,
		postDelete: useMutatePostDelete,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const FetchPosts: FC<ConnectedProps<typeof connector>> = ({
		posts, postAdd, postDelete,
}) => {
		const queryPosts = useQueryGetAllPosts();
		
		switch (queryPosts.status) {
				case "success":
						return (<div>
									<h2 className={ c.title }>PostsList</h2>
									<PostForm postAdd={ postAdd }/>
									<List list={ posts } itemDelete={ postDelete }/>
							</div>
						);
				case "pending":
						return <Loader/>;
				case "error":
						return <div>
								Произошла ошибка при получении данных
								<button onClick={ () => queryPosts.refetch() }>Повторить
										запрос</button>
						</div>;
		}
};

export default connector(FetchPosts);