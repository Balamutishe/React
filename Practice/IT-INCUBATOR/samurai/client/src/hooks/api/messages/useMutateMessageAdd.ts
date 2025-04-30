import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { createMessage } from "../../../api/messages/messages.ts";
import { RootState } from "../../../redux";
import { addMessage } from "../../../redux/DialogsSlice.ts";

export const useMutateMessageAdd = (messageText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		const { mutate } = useMutation({
				mutationFn: () => createMessage(messageText, chatId),
				onSuccess: async (data) => {
						dispatch(addMessage(data));
						await queryClient.invalidateQueries({ queryKey: ["messages"] });
				},
		}, queryClient);
		
		return mutate;
};