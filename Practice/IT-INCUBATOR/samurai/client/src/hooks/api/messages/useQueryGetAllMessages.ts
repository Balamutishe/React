import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getAllMessages } from "../../../api/messages/messages.ts";
import { setMessages } from "../../../redux/MessagesSlice.ts";

export const useQueryGetAllMessages = (chatId: string | undefined,
	page = "1") => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		
		return useQuery({
				queryFn: () => getAllMessages(chatId, page)
				.then(data => dispatch(setMessages(data))),
				queryKey: ["messages", chatId],
				enabled: !!chatId,
		}, queryClient);
};