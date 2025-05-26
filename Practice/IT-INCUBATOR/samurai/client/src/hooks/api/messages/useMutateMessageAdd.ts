import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { createMessage } from "../../../api/messages/messages.ts";
import { setMessageText } from "../../../redux/MessagesSlice.ts";

export const useMutateMessageAdd = (messageText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const chatId = useParams().chatId || "";
		
		return useMutation({
				mutationFn: () => createMessage(messageText, chatId),
				onSuccess: async () => {
						await queryClient.invalidateQueries(
							{ queryKey: ["messages", chatId] });
						dispatch(setMessageText(""));
				},
		}, queryClient);
		
};