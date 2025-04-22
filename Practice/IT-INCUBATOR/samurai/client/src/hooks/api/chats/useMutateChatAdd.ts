import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createChat } from "../../../api/chats/chats.ts";
import { setChatText } from "../../../redux/DialogsSlice.ts";

export const useMutateChatAdd = (chatText: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		const { mutate } = useMutation({
				mutationFn: () => createChat(chatText),
				onSuccess: async () => {
						dispatch(setChatText(""));
						await queryClient.invalidateQueries({ queryKey: ["chats", "all"] });
				},
		}, queryClient);
		
		return mutate;
};