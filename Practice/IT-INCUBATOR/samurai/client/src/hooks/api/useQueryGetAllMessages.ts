import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllMessages } from "../../api/messages/messages.ts";

export const useQueryGetAllMessages = (chatId: string) => {
		const queryClient = useQueryClient();
		const { data, status, refetch } = useQuery({
				queryFn: () => getAllMessages(chatId),
				queryKey: ["messages", "all"],
		}, queryClient);
		
		const messages = data ? data : [];
		
		return {
				messages,
				status,
				refetch,
		};
};