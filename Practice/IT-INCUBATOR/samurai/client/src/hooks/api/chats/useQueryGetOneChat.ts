import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getOneChat } from "../../../api/chats/chats.ts";
import { setMessages } from "../../../redux/DialogsSlice.ts";

export const useQueryGetOneChat = (chatId: string, activePage: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: async () => await getOneChat(chatId, activePage)
				.then((data) => {
						dispatch(setMessages(data.chatMessages));
						return data;
				}),
				queryKey: ["chat", "one"],
		}, queryClient);
};