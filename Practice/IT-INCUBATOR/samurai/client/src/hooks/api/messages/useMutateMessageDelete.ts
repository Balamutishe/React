import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeleteMessage } from "../../../api/messages/messages.ts";
import { deleteMessage } from "../../../redux/MessagesSlice.ts";

export const useMutateMessageDelete = (messageId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => fetchDeleteMessage(messageId),
				onSuccess: () => dispatch(deleteMessage(messageId)),
		}, queryClient);
};