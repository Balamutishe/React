import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage } from "../../../api/messages/messages.ts";
import { useDispatch, useSelector } from "react-redux";
import { setMessageText } from "../../../redux/DialogsSlice.ts";
import { RootState } from "../../../redux";

export const useMutateMessageAdd = (messageText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const chatId = useSelector((state: RootState) => state.dialogsData.chatsData.activeChatId);
		
		const { mutate } = useMutation({
				mutationFn: () => createMessage(messageText, chatId),
				onSuccess: async () => {
						dispatch(setMessageText(""));
						await queryClient.invalidateQueries({ queryKey: ["messages", "all"] });
				},
		}, queryClient);
		
		return mutate;
};