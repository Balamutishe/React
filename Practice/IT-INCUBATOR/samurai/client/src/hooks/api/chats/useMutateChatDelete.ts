import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { fetchDeleteChat } from "../../../api/chats/chats.ts";
import { deleteChat } from "../../../redux/ChatsSlice.ts";

export const useMutateChatDelete = (chatId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => fetchDeleteChat(chatId),
				onSuccess: () => dispatch(deleteChat(chatId)),
		}, queryClient);
};