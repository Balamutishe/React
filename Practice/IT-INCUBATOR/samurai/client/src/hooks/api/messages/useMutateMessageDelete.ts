import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";

export const useMutateMessageDelete = (messageId: string) => {
		const queryClient = useQueryClient();
		const chatId = useParams().chatId || "";
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteMessage(messageId),
				onSuccess: async () => {
						await queryClient.invalidateQueries(
							{ queryKey: ["messages", chatId] });
				},
		}, queryClient);
		
		return mutate;
};