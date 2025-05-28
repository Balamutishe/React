import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createMessage } from "../../../api/messages/messages.ts";
import { addMessage } from "../../../redux/MessagesSlice.ts";

export const useMutateMessageAdd = (messageText: string, chatId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => createMessage(messageText, chatId),
				onSuccess: (data) => dispatch(addMessage(data)),
		}, queryClient);
		
};