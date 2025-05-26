import { useQueryGetAllPosts } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import PostsContainer from "./PostsContainer.tsx";

export const PostsView = () => {
		const queryPosts = useQueryGetAllPosts();
		
		switch (queryPosts.status) {
				case "success":
						return <PostsContainer/>;
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