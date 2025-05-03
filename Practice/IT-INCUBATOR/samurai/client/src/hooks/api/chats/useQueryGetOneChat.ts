import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getOneChat } from "../../../api/chats/chats.ts";
import { setMessages } from "../../../redux/DialogsSlice.ts";

export const useQueryGetOneChat = (chatId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const page = useParams().page || "1";
		
		return useQuery({
				queryFn: async () => await getOneChat(chatId, page)
				.then((data) => {
						dispatch(setMessages(data.chatMessages));
						return data;
				}),
				queryKey: ["chat", "one"],
		}, queryClient);
};