import { useQuery } from "@tanstack/react-query";

import { getAllMessages } from "../../api/messages/messages.ts";
import { queryClient } from "../../api/queryClient.ts";

type TUseQueryGetAllMessages = {
	chatId: string;
}

export const useQueryGetAllMessages = ({ chatId }: TUseQueryGetAllMessages) => {
	const { data, status, refetch } = useQuery({
		queryFn: () => getAllMessages(chatId),
		queryKey: ["messages", "all"]
	}, queryClient)

	return {
		data,
		status,
		refetch
	}
}