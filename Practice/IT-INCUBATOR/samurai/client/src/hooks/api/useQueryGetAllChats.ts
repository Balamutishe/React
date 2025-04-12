import { useQuery } from "@tanstack/react-query";

import { getAllChats } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllChats = (userId: string) => {
	const { data, status, refetch } = useQuery({
		queryFn: () => getAllChats(userId),
		queryKey: ["chats", "all"]
	}, queryClient)

	const chats = data ? data : []

	return {
		chats,
		status,
		refetch,
	}
}