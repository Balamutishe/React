import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { getAllMessages } from "../../api/messages/messages.ts";
import { queryClient } from "../../api/queryClient.ts";
import { RootState } from "../../redux";

export const useQueryGetAllMessages = () => {
	const chatId = useSelector(
		(state: RootState) => state.dialogsData.activeChatId);

	const { data, status, refetch } = useQuery({
		queryFn: () => getAllMessages(chatId),
		queryKey: ["messages", "all"]
	}, queryClient)

	const messages = data ? data : []

	return {
		messages,
		status,
		refetch
	}
}