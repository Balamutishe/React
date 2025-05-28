import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createChat } from "../../../api/chats/chats.ts";
import { addChat } from "../../../redux/ChatsSlice.ts";

export const useMutateChatAdd = (chatText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useMutation({
				mutationFn: () => createChat(chatText),
				onSuccess: (data) => dispatch(addChat(data)),
		}, queryClient);
};