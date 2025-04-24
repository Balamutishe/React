import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { getAllMessages } from "../../../api/messages/messages.ts";
import { RootState } from "../../../redux";

export const useQueryGetAllMessages = () => {
		const queryClient = useQueryClient();
		const chatId = useSelector(
			(state: RootState) => state.dialogsData.chatsData.activeChatId);
		const params = useParams();
		const page = params.page ? Number(params.page) : 1;
		
		return useQuery({
				queryFn: () => getAllMessages(chatId, page),
				queryKey: ["messages", "all"],
		}, queryClient);
};