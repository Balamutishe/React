import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { createMessage } from "../../../api/messages/messages.ts";

export const useMutateMessageAdd = (messageText: string) => {
		const queryClient = useQueryClient();
		const chatId = useParams().chatId || "";
		
		const { mutate } = useMutation({
				mutationFn: () => createMessage(messageText, chatId),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["chat", "one"] });
				},
		}, queryClient);
		
		return mutate;
};