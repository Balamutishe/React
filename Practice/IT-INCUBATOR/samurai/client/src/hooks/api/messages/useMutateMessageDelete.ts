import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";

export const useMutateMessageDelete = () => {
		const queryClient = useQueryClient();
		
		return useMutation({
				mutationFn: fetchDeleteMessage,
				onSuccess: async () => await queryClient.invalidateQueries(
					{ queryKey: ["messages"] }),
		}, queryClient);
};