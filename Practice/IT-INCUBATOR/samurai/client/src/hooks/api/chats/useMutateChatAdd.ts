import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createChat } from "../../../api/chats/chats.ts";

export const useMutateChatAdd = (chatText: string) => {
		const queryClient = useQueryClient();
		
		const { mutate } = useMutation({
				mutationFn: () => createChat(chatText),
				onSuccess: async () => {
						await queryClient.invalidateQueries({
								queryKey: ["chats", "all"],
						});
				},
		}, queryClient);
		
		return mutate;
};