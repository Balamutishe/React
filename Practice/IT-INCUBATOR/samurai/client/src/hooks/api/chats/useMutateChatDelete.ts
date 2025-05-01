import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";
import { setActiveChatId } from "../../../redux/DialogsSlice.ts";

export const useMutateChatDelete = (chatId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => fetchDeleteChat(chatId),
				onSuccess: async () => {
						dispatch(setActiveChatId(""));
						await queryClient.invalidateQueries({ queryKey: ["chats", "all"] });
						await queryClient.invalidateQueries(
							{ queryKey: ["messages"] });
				},
		}, queryClient);
		
		return mutate;
};