import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";
import { deleteMessage } from "../../../redux/DialogsSlice.ts";

export const useMutateMessageDelete = (messageId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteMessage(messageId),
				onSuccess: async () => {
						dispatch(deleteMessage(messageId));
						await queryClient.invalidateQueries({ queryKey: ["messages"] });
				},
		}, queryClient);
		
		return mutate;
};