import { useQueryGetAllPosts } from "../../hooks/api";
import { Loader } from "../Loader/Loader.tsx";
import { Posts } from "./Posts.tsx";

export const PostsView = () => {
		const queryPosts = useQueryGetAllPosts();
		
		switch (queryPosts.status) {
				case "error":
						return <div>
								Произошла ошибка при получении данных
								<button onClick={ () => queryPosts.refetch() }>Повторить
										запрос</button>
						</div>;
				case "pending":
						return <Loader/>;
				case "success":
						return <Posts/>;
		}
};