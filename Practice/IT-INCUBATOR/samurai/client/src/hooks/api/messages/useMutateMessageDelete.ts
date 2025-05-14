import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";

export const useMutateMessageDelete = (messageId: string) => {
		const queryClient = useQueryClient();
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteMessage(messageId),
				onSuccess: async () => {
						await queryClient.invalidateQueries({ queryKey: ["chat", "one"] });
				},
		}, queryClient);
		
		return mutate;
};