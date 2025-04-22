import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllChats } from "../../../api/chats/chats.ts";

export const useQueryGetAllChats = () => {
		const queryClient = useQueryClient();
		return useQuery({
				queryFn: () => getAllChats(),
				queryKey: ["chats", "all"],
		}, queryClient);
};