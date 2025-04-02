import { useQuery } from "@tanstack/react-query";

import { queryClient } from "../../../api/queryClient.ts";
import { Posts } from "./Posts.tsx";
import { getAllPosts } from "../../../api/posts/posts.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import userImg from '../../../assets/149071.png'

export const PostsView = () => {
	const { _id } = useSelector(
		(state: RootState) => state.userData)
	const { data, status, refetch } = useQuery({
		queryFn: () => getAllPosts(_id),
		queryKey: ["posts", "all"]
	}, queryClient)

	const posts = data ? data : []

	switch (status) {
		case "success":
			return (
				<Posts
					refetch={ refetch } posts={ posts } userId={ _id } userImg={ userImg }
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