import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { RootState } from "../../redux";
import { getAllChats } from "../../api/chats/chats.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllChats = () => {
	const userId = useSelector(
		(state: RootState) => state.userData.user._id)

	const { data, status, refetch } = useQuery({
		queryFn: () => getAllChats(userId),
		queryKey: ["chats", "all"]
	}, queryClient)

	return {
		data,
		status,
		refetch,
	}
}