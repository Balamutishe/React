import { useQuery } from "@tanstack/react-query";

import { queryClient } from "../../../api/queryClient.ts";
import { Posts } from "./Posts.tsx";
import { getAllPosts } from "../../../api/posts/posts.ts";

export const UserDataView = () => {
	const queryPosts = useQuery({
		queryFn: () => getAllPosts(),
		queryKey: ["posts"]
	}, queryClient)

	switch (queryPosts.status) {
		case "success":
			return (
				<Posts posts={ queryPosts.data }/>
			)
		case "error":
			return (
				<div>
					<p>
						Произошла ошибка получения данных
					</p>
					<button onClick={ () => queryPosts.refetch() }>
						Повторить запрос
					</button>
				</div>
			)
	}
}