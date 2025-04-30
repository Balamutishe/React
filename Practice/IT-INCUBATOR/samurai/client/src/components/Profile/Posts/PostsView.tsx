import { Posts } from "./Posts.tsx";
import { useQueryGetAllPosts } from "../../../hooks/api";

export const PostsView = () => {
		const queryPosts = useQueryGetAllPosts();
		
		switch (queryPosts.status) {
				case "error":
						return <div>
								Произошла ошибка при получении данных
								<button onClick={ () => queryPosts.refetch() }>Повторить
										запрос</button>
						</div>;
				case "success":
						return <Posts/>;
		}
};