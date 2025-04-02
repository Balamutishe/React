import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { queryClient } from "../../../api/queryClient.ts";
import { Chats } from "./Chats.tsx";
import { RootState } from "../../../redux";
import { getAllChats } from "../../../api/chats/chats.ts";

export const ChatsView = () => {
	const userId = useSelector(
		(state: RootState) => state.userData._id)

	const { data, status, refetch } = useQuery({
		queryFn: () => getAllChats(userId),
		queryKey: ["chats", "all"]
	}, queryClient)

	const chats = data ? data : []

	switch (status) {
		case "success":
			return (
				<Chats chats={ chats } userId={ userId } refetch={ refetch }/>
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