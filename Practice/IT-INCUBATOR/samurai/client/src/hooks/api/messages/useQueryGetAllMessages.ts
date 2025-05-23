import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetAllMessages = (chatId: string = "", page: string) => {
		const queryClient = useQueryClient();
		
		return useQuery({
				queryFn: async () => await getAllMessages(chatId, page)
				.then((data) => {
						return data;
				}),
				queryKey: ["messages", chatId],
				enabled: !!chatId,
		}, queryClient);
};