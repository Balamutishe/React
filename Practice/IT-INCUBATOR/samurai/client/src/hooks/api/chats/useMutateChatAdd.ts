import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createChat } from "../../../api/chats/chats.ts";
import { setChatText } from "../../../redux/ChatsSlice.ts";

export const useMutateChatAdd = (chatText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => createChat(chatText),
				onSuccess: async () => {
						await queryClient.invalidateQueries(
							{ queryKey: ["chats", "all"] });
						dispatch(setChatText(""));
				},
		}, queryClient);
		
		return mutate;
};