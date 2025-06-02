import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetAllMessages = (chatId: string | undefined,
	page = "1") => {
		const queryClient = useQueryClient();
		
		return useQuery({
				queryFn: () => getAllMessages(chatId, page),
				queryKey: ["messages", chatId],
				enabled: !!chatId,
		}, queryClient);
};