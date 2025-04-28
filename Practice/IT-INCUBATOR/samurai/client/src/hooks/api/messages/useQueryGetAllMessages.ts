import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getAllMessages } from "../../../api/messages/messages.ts";

export const useQueryGetAllMessages = (chatId: string) => {
		const queryClient = useQueryClient();
		const page = Number(useParams().page) || 1;
		
		return useQuery({
				queryFn: async () => await getAllMessages(chatId, page),
				queryKey: ["messages"],
				retry: false,
		}, queryClient);
};