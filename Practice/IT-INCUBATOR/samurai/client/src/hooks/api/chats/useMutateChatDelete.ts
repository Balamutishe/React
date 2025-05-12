import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";

export const useMutateChatDelete = (chatId: string) => {
		const queryClient = useQueryClient();
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteChat(chatId),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["chats", "all"] });
				},
		}, queryClient);
		
		return mutate;
};