import { Posts } from "./Posts.tsx";
import userImg from '../../../assets/149071.png'
import { useQueryGetAllPosts } from "../../../hooks/api/useQueryGetAllPosts.ts";

export const PostsView = () => {
	const { data, status, refetch } = useQueryGetAllPosts()

	switch (status) {
		case "success":
			return (
				<Posts
					refetch={ refetch } posts={ data ? data : [] } userImg={ userImg }
				/>
			)
		case "error":
			return (
				<div>
					<p>
						Произошла ошибка получения данных
					</p>
					<button onClick={ () => refetch() }>
						Повторить запрос
					</button>
				</div>
			)
	}
}