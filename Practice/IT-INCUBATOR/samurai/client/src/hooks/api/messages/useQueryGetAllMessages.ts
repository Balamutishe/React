import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getAllMessages } from "../../../api/messages/messages.ts";
import { setMessages } from "../../../redux/MessagesSlice.ts";

export const useQueryGetAllMessages = (chatId: string) => {
		const queryClient = useQueryClient();
		const dispatch = useDispatch();
		const page = Number(useParams().page) || 1;
		
		return useQuery({
				queryFn: async () => await getAllMessages(chatId, page)
				.then((data) => {
						dispatch(setMessages(data));
						return data;
				}),
				queryKey: ["messages"],
		}, queryClient);
};