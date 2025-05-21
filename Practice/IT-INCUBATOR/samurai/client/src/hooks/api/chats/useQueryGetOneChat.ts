import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getOneChat } from "../../../api/chats/chats.ts";

export const useQueryGetOneChat = (activePage: string,
	chatId: string = "") => {
		const queryClient = useQueryClient();
		
		return useQuery({
				queryFn: () => getOneChat(chatId, activePage)
				.then((data) => {
						return data;
				}),
				queryKey: ["chat", chatId],
				enabled: !!chatId,
		}, queryClient);
};