import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllMessages } from "../../../api/messages/messages.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export const useQueryGetAllMessages = () => {
		const queryClient = useQueryClient();
		const chatId = useSelector((state: RootState) => state.dialogsData.chatsData.activeChatId);
		return useQuery({
				queryFn: () => getAllMessages(chatId),
				queryKey: ["messages", "all"],
		}, queryClient);
};