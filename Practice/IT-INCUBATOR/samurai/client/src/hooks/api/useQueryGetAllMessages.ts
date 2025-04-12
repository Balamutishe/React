import { useQuery } from "@tanstack/react-query";

import { getAllMessages } from "../../api/messages/messages.ts";
import { queryClient } from "../../api/queryClient.ts";

export const useQueryGetAllMessages = (chatId: string) => {
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